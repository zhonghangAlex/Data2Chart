# 项目API文档

> 项目统一域名: [https://datavis.all1024.com](https://datavis.all1024.com)

### 1. 登录与权鉴——获取验证码svg接口
- `Method`: GET
- `Path`: /login/getcaptcha
- `Params`: 
v : float 随机数
- `Notice`: 前端请求需要拼接为`/login/getcaptcha?v=xxx`, xxx为随机数用于消除缓存, 可以直接通过img的src标签获取。
- `Case`: svg图片，可以直接点击[https://datavis.all1024.com/login/getcaptcha?v=xxx](https://datavis.all1024.com/login/getcaptcha?v=xxx)查看。

### 2. 登录与权鉴——登录验证接口
- `Method`: POST
- `Path`: /login/validateUsr
- `Params`: 
user_name : string 用户名
password : string 密码
- `Cookie`: 
captcha_client : string 用户输入的验证码 
- `Notice`: 将用户输入的验证码写入到Cookie中。
- `Case`:
```json
// 用户不存在/密码错误/验证码错误
{
  "code": 1,
  "message": "用户不存在/密码错误/验证码错误",
  "result": {}
}
```

```json
// 正常结果
{
  "code": 0,
  "message": "登录成功",
  "result": {}
}
```
### 3. 项目相关——获取某用户的全部项目信息

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

### 4. 项目相关——新增一个项目

- `Method`: POST

- `Path`: /cms/addProject

- `Params`:

  user_name : string 用户名
  project_name : string 项目名

- `Notice`：当新建的项目名重复的时候回返回相关错误信息

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

### 5. 项目相关——删除一个项目

- 待撰写

### 6.  项目相关——更新当前项目的编辑状态（进行到哪一步）

- 待撰写

### 7. 项目相关——获取某项目的数据源

- `Method`: GET
- `Path`: /cms/getProjectData
- `Params`: 
  project_id : string 项目ID
- `Notice`:  用于测试的project_id为`32958067-a627-4b64-abaa-43c52734b649`
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
        "data": {
            "title": "demo.csv",
            "data": [
                {
                    "name": "Karry1",
                    "age": 13,
                    "height": 1.57,
                    "weight": 71,
                    "hobby": "qw",
                    "comp6": 3.14
                },
                {
                    "name": "Karry2",
                    "age": 14,
                    "height": 1.76,
                    "weight": 72,
                    "hobby": "axqaa",
                    "comp6": 3.52
                },
                {
                    "name": "Karry3",
                    "age": 15,
                    "height": 1.78,
                    "weight": 73,
                    "hobby": "vsc",
                    "comp6": 3.56
                }
            ],
            "cols": [
                {
                    "cid": 1,
                    "cKey": "name",
                    "cname": "姓名",
                    "type": "string"
                },
                {
                    "cid": 2,
                    "cKey": "age",
                    "cname": "年龄",
                    "type": "number"
                },
                {
                    "cid": 3,
                    "cKey": "height",
                    "cname": "身高",
                    "type": "number"
                },
                {
                    "cid": 4,
                    "cKey": "weight",
                    "cname": "体重",
                    "type": "number"
                },
                {
                    "cid": 5,
                    "cKey": "hobby",
                    "cname": "兴趣",
                    "type": "string"
                },
                {
                    "cid": 6,
                    "cKey": "comp6",
                    "cname": "随便加了一列",
                    "type": "number"
                }
            ]
        }
    }
}
```

### 8. 项目相关——更新某项目的数据源

- `Method`: POST

- `Path`: /cms/updateProjectData

- `Params`: 
  project_id : string 项目ID

  data_string : string 数据字符串

- `Notice`:  

  ① 用于测试的project_id为`32958067-a627-4b64-abaa-43c52734b649`

  ② `data_string`存储的时候是字符串，但是浏览器可能会自动将一个obj字符串化一下，所以测试的时候看一下是否需要对data_string进行`JSON.stringfy`，额外进行一次`stringfy`可能会导致`parse`失败

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
        "data_string": "xxxxxxx"
    }
}
```

### 7. 图表及配置相关——获取一个项目下所有可视化图表信息

- 待撰写

### 8. 图表及配置相关——某项目新建一个可视化图表

- `Method`: POST

- `Path`: /cms/addChartPic

- `Params`:

  project_id : string 项目编号
  charttype_id : string 图表类型编号

- `Notice`：在新建图表操作的时候，需要对图表的类型进行指定

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
            "id": 1,
            "chartpic_id": "bffb2648-0f5d-46b1-8740-a74f34513888",
            "project_id": "32958067-a627-4b64-abaa-43c52734b649",
            "charttype_id": "1",
            "create_time": "2022-02-01T19:58:48.997Z",
            "modify_time": "2022-02-01T19:58:48.997Z"
        }
    }
}
```

### 9. 图表及配置相关——某项目删除一个可视化图表

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

### 10. 图表及配置相关——更新某个图表的配置信息

- 待撰写