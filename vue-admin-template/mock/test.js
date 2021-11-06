const list = [
  {
    nick: "allen",
    phone: 7749656984884,
    name: "hyufrhg",
    subject: "前端",
    job: "项目经理",
    year: "10年",
    updateTime: "2021-11-04",
  },
  {
    nick: "hyufrhg",
    phone: 7749656984884,
    name: "gyrgue",
    subject: "前端",
    job: "前端技术专家",
    year: '5年',
    updateTime: "2021-11-04",
  },
  {
    nick: "Ajen",
    phone: 7749656984884,
    name: "hyufrhg",
    subject: "大数据",
    job: "后端开发工程师",
    year: '5年',
    updateTime: "2021-11-04",
  },
  {
    nick: "Ajen",
    phone: 7749656984884,
    name: "hyufrhg",
    subject: "运维",
    job: "运维",
    year: '10年',
    updateTime: "2021-11-04",
  },
];

module.exports = [
  {
    url: "/vue-admin-template/test/list",
    type: "get",
    response: (config) => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list,
        },
      };
    },
  },
];
