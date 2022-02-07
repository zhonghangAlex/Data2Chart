"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMergedHTMLStringFunc = exports.addChartPicFunc = void 0;
const ChartPicDao_1 = __importDefault(require("../db/dao/ChartPicDao"));
const uuid_1 = require("uuid");
const js_beautify_1 = __importDefault(require("js-beautify"));
// 项目增加一个新的图表方法
async function addChartPicFunc(project_id, chart_type) {
    // 缺失检查
    if (!project_id || !chart_type) {
        return { code: 1, message: '请求参数错误或内容缺失', result: null };
        ;
    }
    // 定义插入数据模型
    let chartpic_info = {
        chartpic_id: (0, uuid_1.v4)(),
        project_id,
        chart_type,
        create_time: new Date(),
        modify_time: new Date()
    };
    // 新项目入库操作
    try {
        let data = await ChartPicDao_1.default.addChartPic(chartpic_info);
        return { code: 0, message: '图表新建成功', result: { data } };
    }
    catch (e) {
        return { code: 1, message: '新建图表数据存储异常', result: { details: `${e}` } };
    }
}
exports.addChartPicFunc = addChartPicFunc;
// 获取融合好且格式化后的HTML字符串
async function getMergedHTMLStringFunc(chartpic_id) {
    // 获取当前图表信息
    let chartData = {};
    try {
        let resData = await ChartPicDao_1.default.getOneChartPic(chartpic_id);
        if (!resData) {
            return { code: 1, message: '图表不存在', result: null };
        }
        if (!resData.chart_type || !resData.vis_config || resData.vis_config === '{}') {
            return { code: 1, message: '请先进行正确的图表配置或检查配置数据项', result: null };
        }
        chartData.chart_type = resData.chart_type;
        chartData.vis_config = JSON.parse(resData.vis_config);
    }
    catch (e) {
        return { code: 1, message: '数据更新异常', result: { details: `${e}` } };
    }
    // 解析html字符串并注入数据（ejs方案，存在格式化问题）
    // let EJS2HTML = await new Promise((resolve, reject) => {
    //     ejs.renderFile(
    //         path.resolve(__dirname, '../../', 'public/template/', 'chartTemplate.ejs'), chartData, function (err, string) {
    //             if (err) {
    //                 reject(string);
    //             } else {
    //                 resolve(string);
    //             }
    //         }
    //     );
    // });
    let EJS2HTML = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>导出文件</title>
            <script type="text/javascript" src="https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js"></script>
        </head>

        <body>
            <div id="container"></div>
        </body>

        <script>
            const type = "${chartData.chart_type}";
            const options = ${JSON.stringify(chartData.vis_config)};
            new G2Plot[type]('container', options).render();
        </script>

        </html>
    `;
    EJS2HTML = js_beautify_1.default.html(EJS2HTML);
    return { code: 0, message: '图表代码获取成功', result: { data: EJS2HTML } };
}
exports.getMergedHTMLStringFunc = getMergedHTMLStringFunc;
