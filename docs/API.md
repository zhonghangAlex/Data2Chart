# 项目API文档

> 项目统一域名: [https://datavis.all1024.com](https://datavis.all1024.com)

### 1. 登录与权鉴——获取验证码svg接口
- `Method`: GET

- `Path`: /login/getcaptcha

- `Params`: 
  v : float 随机数

- `Notice`: 

  ① 前端请求需要拼接为`/login/getcaptcha?v=xxx`, xxx为随机数用于消除缓存, 可以直接通过img的src标签获取；

  ② 同时实现点击验证码图片，重新请求新的验证码图片。

- `Case`: svg图片，可以直接点击[https://datavis.all1024.com/login/getcaptcha?v=xxx](https://datavis.all1024.com/login/getcaptcha?v=xxx)查看。

### 2. 登录与权鉴——登录验证接口
- `Method`: POST

- `Path`: /login/validateUsr

- `Params`: 
  user_name : string 用户名
  password : string 密码

- `Cookie`: 
  captcha_client : string 用户输入的验证码 

- `Notice`: 

  ① 测试账号：alexzhli  测试密码：123456

  ② 将用户输入的验证码写入到Cookie中。

- `Case`:
```json
// 用户不存在/密码错误/验证码错误
{
  "code": 1,
  "message": "用户不存在/密码错误/验证码错误",
  "result": null
}
```

```json
// 正常结果
{
  "code": 0,
  "message": "登录成功",
  "result": {
  	"user_name": "alexzhli"
  }
}
```
### 3. 登录与权鉴——退出登录

- `Method`: POST
- `Path`: /login/logout
- `Params`: 
  不需要传递任何参数
- `Notice`: 清除Cookie中的`user`和`jwt_token`（前端也清除一下更加保险）。
- `Case`:

```json
// 正常结果
{
  "code": 0,
  "message": "退出登录成功",
  "result": null
}
```

### 4. 项目相关——获取某用户的全部项目信息

- `Method`: GET
- `Path`: /cms/getAllProjects
- `Params`: 
  user_name : string 用户名
- `Case`:

```json
// 正常结果
{
    "code": 0,
    "message": "alexzhli的项目信息获取成功",
    "result": {
        "data": [
            {
                "id": 1,
                "project_id": "f13108a4-5c11-45b7-b8fa-76125059f471",
                "user_name": "alexzhli",
                "project_name": "BUG都写对项目233",
                "data_type": 1,  // 数据存储类型，0为文件，1为json字符串
                "data_file": null,  // 项目数据文件
                "data_string": "{}", // 项目数据json字符串
                "index_pic": null, // 封面图片
                "first_finished": 1,  // 1为第一步新建项目完成，-1为没有 
                "second_finished": -1,  // 1为第二步数据预处理完成，-1为没有
                "third_finished": -1,  // 1为第三步可视化配置完成，-1为没有
                "share_hash": "",  // 分享的hash地址
                "create_time": "2022-02-01T17:27:57.000Z", // 数据创建时间
                "modify_time": "2022-02-01T17:27:57.000Z" // 数据编辑时间
            },
            {
                "id": 2,
                "project_id": "315b201e-8df7-40da-877b-9fbb02cbf7fa",
                "user_name": "alexzhli",
                "project_name": "BUG都写对项目666",
                "data_type": 1,
                "data_file": null,
                "data_string": "{}",
                "index_pic": null,
                "first_finished": 1,
                "second_finished": -1,
                "third_finished": -1,
                "share_hash": "",
                "create_time": "2022-02-01T17:28:38.000Z",
                "modify_time": "2022-02-01T17:28:38.000Z"
            }
        ]
    }
}
```

### 5. 项目相关——新增一个项目并且初始化图表

- `Method`: POST

- `Path`: /cms/addProject

- `Params`:

  user_name : string 用户名

  project_name : string 项目名

  data_string ：string  源数据 （标准json字符串格式）

- `Notice`：

  ① 当新建的项目名重复的时候回返回相关错误信息；

  ② 新建项目的同时会默认新建一个新的图表（预留了一个项目对应多图表的能力）；

  ③ data_string 需要为标准json格式的字符串。

- `Case`:

```json
// 项目名称重复
{
    "code": 1,
    "message": "项目名称重复，请重新输入确认",
    "result": null
}
```

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "“BUG都写对项目”项目新建成功",
    "result": {
        "data": {
            "data_type": 1,
            "data_string": "{}",
            "first_finished": 1,  // 1为第一步新建项目完成，-1为没有 
            "second_finished": -1,  // 1为第二步数据预处理完成，-1为没有
            "third_finished": -1,  // 1为第三步可视化配置完成，-1为没有
            "share_hash": "",  // 分享的hash地址
            "id": 6,
            "user_name": "alexzhli",
            "project_name": "BUG都写对项目",
            "project_id": "32958067-a627-4b64-abaa-43c52734b649",
            "create_time": "2022-02-01T18:14:38.714Z",
            "modify_time": "2022-02-01T18:14:38.714Z"
        }
    }
}
```

### 6.  项目相关——删除一个项目并且删除项目下的图表

- `Method`: POST

- `Path`: /cms/deleteProject

- `Params`:

  project_id : string 项目ID

- `Notice`：删除一个项目会删除这个项目下所有图表的信息

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "项目删除成功",
    "result": null
}
```

### 7.  项目相关——更新当前项目的编辑状态（各个步骤的完成状态）

- `Method`: POST

- `Path`: /cms/updateProjectStatus

- `Params`:

  project_id : string 项目ID

  first_finished ：number 第一步新建项目是否完成

  second_finished ：number 第二步数据预处理是否完成

  third_finished ：number 第三步可视化配置是否完成

- `Notice`：1 为完成， -1为未完成

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 状态值不为数字
{
    "code": 1,
    "message": "状态值应该为数字",
    "result": null
}
```

```json
// 状态值不为1或者-1
{
    "code": 1,
    "message": "状态值必须为-1或1的数字",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "项目状态更新成功",
    "result": {
        "project_id": "32958067-a627-4b64-abaa-43c52734b649",
        "first_finished": 1,
        "second_finished": 1,
        "third_finished": 1
    }
}
```

### 8.  项目相关——获取某项目的数据源

- `Method`: GET

- `Path`: /cms/getProjectData

- `Params`: 
  project_id : string 项目ID
  
- `Notice`:  

  ① 用于测试的project_id为`32958067-a627-4b64-abaa-43c52734b649`；

  ② 返回的data部分为json的字符串，前端按需进行`JSON.parse()`等操作。

- `Case`:

```json
// 项目ID错误
{
    "code": 1,
    "message": "未查找到相关数据，请检查项目ID",
    "result": null
}
```

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "的项目数据获取成功",
    "result": {
        "data": "{}"
    }
}
```

### 9. 项目相关——更新某项目的数据源

- `Method`: POST

- `Path`: /cms/updateProjectData

- `Params`: 
  project_id : string 项目ID

  data_string : string 数据JSON字符串

- `Notice`:  

  ① 用于测试的project_id为`32958067-a627-4b64-abaa-43c52734b649`。

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "项目数据源更新成功",
    "result": {
        "project_id": "32958067-a627-4b64-abaa-43c52734b649",
        "data_string": "{}"
    }
}
```

### 10. 图表及配置相关——获取当前项目的全部图表信息

- `Method`: GET

- `Path`: /cms/getAllChartPic

- `Params`: 
  project_id : string 项目ID
  
- `Notice`:  

  ① 用于测试的project_id为`32958067-a627-4b64-abaa-43c52734b649`；

  ② 这里预留了一个项目多图表的拓展，因此在项目与图表一对一的情况下，直接取返回data数组的第一个数据即可；

  ③ 返回的vis_config、watermark_config等字段为json的字符串，前端按需进行`JSON.parse()`等操作。

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "图表信息查询成功",
    "result": {
        "data": [
            {
                "id": 12,
                "chartpic_id": "902004e8-51df-4380-811a-e983dbe136fc", // 图表id
                "project_id": "32958067-a627-4b64-abaa-43c52734b649", // 项目id
                "chart_type": "Line",  // 图表类型
                "chart_title": null, // 图表标题
                "vis_config": "{}", // 图表可视化相关配置
                "watermark_config": "{}", // 图表水印相关配置
                "export_img": null, // 导出图片base64
                "create_time": "2022-02-07T15:02:55.000Z",
                "modify_time": "2022-02-07T15:02:55.000Z"
            }
        ]
    }
}
```

### 11. 图表及配置相关——某项目新建一个可视化图表（预留API，暂时用不着）

- `Method`: POST

- `Path`: /cms/addChartPic

- `Params`:

  project_id : string 项目编号
  chart_type : string 图表类型

- `Notice`：

  ① 在新建图表操作的时候，需要对图表的类型进行指定（参考AntV标准类，例如`Line`）

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "图表新建成功",
    "result": {
        "data": {
            "vis_config": "{}",
            "watermark_config": "{}",
            "id": 12,
            "chartpic_id": "902004e8-51df-4380-811a-e983dbe136fc",
            "project_id": "32958067-a627-4b64-abaa-43c52734b649",
            "chart_type": "Line",
            "create_time": "2022-02-07T15:02:55.076Z",
            "modify_time": "2022-02-07T15:02:55.076Z"
        }
    }
}
```

### 12. 图表及配置相关——某项目删除一个可视化图表（预留API，暂时用不着）

- `Method`: POST

- `Path`: /cms/deleteChartPic

- `Params`:

  chartpic_id : string 图表编号

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "图表删除成功",
    "result": null
}
```

### 13. 图表及配置相关——确定/修改图表类型并初始化配置（标题 + 水印 + 可视化等配置）

- `Method`: POST

- `Path`: /cms/updateChartPicConfig

- `Params`:

  chartpic_id : string 图表编号

  chart_type ：string 图表类型

  chart_title : string 图表标题默认值

  vis_config ：string 可视化配置json字符串默认值

  watermark_config ：string 水印配置json字符串默认值

- `Notice`：

  ① 接口在图表类型选择界面使用，只有当该请求成功的时候，才可以跳转到下一个界面；

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常返回
{
    "code": 0,
    "message": "图表配置更新成功",
    "result": {
        "chartpic_id": "902004e8-51df-4380-811a-e983dbe136fc",
        "chart_type": "Line",
        "chart_title": "默认标题",
        "vis_config": "{\"name\": \"alexzhli\"}",
        "watermark_config": "{\"ifOk\": true}"
    }
}
```

### 14. 图表及配置相关——保存某个图表的配置信息（标题 + 水印 + 可视化等配置）

- 可以直接复用13接口
- 在单独保存某个图表配置的时候使用。

### 15. 图表及配置相关——获取某个图表的全部信息

- `Method`: GET

- `Path`: /cms/getCurrentChartPic

- `Params`: 
  chartpic_id : string 图表ID

- `Notice`: 

  ①  用于测试的chartpic_id为`902004e8-51df-4380-811a-e983dbe136fc`；

  ② 返回的vis_config、watermark_config等字段为json的字符串，前端按需进行`JSON.parse()`等操作。

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "图表信息查询成功",
    "result": {
        "data": {
            "id": 12,
            "chartpic_id": "902004e8-51df-4380-811a-e983dbe136fc",
            "project_id": "32958067-a627-4b64-abaa-43c52734b649",
            "chart_type": "Line",
            "chart_title": "默认标题",
            "vis_config": "{\"name\": \"alexzhli\"}",
            "watermark_config": "{\"ifOk\": true}",
            "export_img": null,
            "create_time": "2022-02-07T15:02:55.000Z",
            "modify_time": "2022-02-07T16:03:04.000Z"
        }
    }
}
```

### 16. 发布与导出相关——更新当前图表的导出图片，并设置为主图

- `Method`: POST

- `Path`: /cms/updateCurrentChartPicExport

- `Params`: 
  project_id : string 项目ID

  chartpic_id : string 图表ID

  export_img ：string 导出图片base64

- `Notice`: 

  ①  用于测试的chartpic_id为`902004e8-51df-4380-811a-e983dbe136fc`；

  ②  此操作会在更新当前导出图片的同时，将该图片设置为项目主图。

- `Case` : 

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "图片更新成功",
    "result": null
}
```

### 17. 发布与导出相关——获取当前图表的导出图片

- 可以直接复用15接口

### 18. 发布与导出相关——获取某个项目的数据源

- 可以直接复用8接口

### 19. 发布与导出相关——获取当前图表的html代码

- `Method`: GET

- `Path`: /cms/getChartPicHtmlString

- `Params`: 
  chartpic_id : string 图表ID

- `Notice`: 

  ①  用于测试的chartpic_id为`902004e8-51df-4380-811a-e983dbe136fc`；

  ②  返回的html字符串已经进行了对齐换行等格式化。

- `Case`:

```json
// 请求参数错误
{
    "code": 1,
    "message": "请求参数错误或内容缺失",
    "result": null
}
```

```json
// 正常结果
{
    "code": 0,
    "message": "图表代码获取成功",
    "result": {
        "data": "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>导出文件</title>\n    <script type=\"text/javascript\" src=\"https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js\"></script>\n</head>\n\n<body>\n    <div id=\"container\"></div>\n</body>\n\n<script>\n    const type = \"Line\";\n    const options = {\n        \"width\": 300,\n        \"height\": 200,\n        \"autoFit\": false,\n        \"xField\": \"year\",\n        \"yField\": \"value\",\n        \"data\": [{\n            \"year\": \"1991\",\n            \"value\": 3\n        }, {\n            \"year\": \"1992\",\n            \"value\": 4\n        }]\n    };\n    new G2Plot[type]('container', options).render();\n</script>\n\n</html>"
    }
}
```

### 20. 发布与导出相关——下载当前项目的导出html文件

- `Method`: POST

- `Path`: /cms/getChartPicHtmlFile

- `Params`: 
  chartpic_id : string 图表ID

- `Notice`: 

  ①  用于测试的chartpic_id为`902004e8-51df-4380-811a-e983dbe136fc`；

  ②  成功与否通过返回的headers中的`ifExportSuccess`字段获取，如果为`"0"`则成功，如果为`"1"`则失败。

  ③  前端请求设置：`responseType: 'arraybuffer'`;

  ④ 下载接口还是需要前端配合一下，将返回的buffer转为blob通过a标签点击的形式下载，代码如下：

```js
let objUrl = URL.createObjectURL(new Blob([response.data])); // 根据字段替换
let link = document.createElement('a');
link.download = decodeURIComponent('exportCode.html');
link.href = objUrl;
link.click();
```



