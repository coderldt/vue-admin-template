interface Config {
  title: string;
}

interface Menu {
  title: string;
  icon?: string;
  path?: string;
  id: string;
  children?: Array<Menu>;
}

const config: Config = {
  title: "我的征信",
};

const menu: Array<Menu> = [
  {
    title: "首页",
    icon: "House",
    path: "/",
    id: "1",
  },
  {
    title: "征信查询",
    icon: "Search",
    path: "/",
    id: "2",
    children: [
      {
        title: "企业查询",
        icon: "",
        path: "/creditQuery",
        id: "2-1",
      },
      {
        title: "征信报告",
        icon: "",
        path: "/creditReport",
        id: "2-2",
      },
      {
        title: "关系图谱",
        icon: "",
        path: "/relationship",
        id: "2-3",
      },
    ],
  },
  {
    title: "风险计划",
    icon: "Moon",
    id: "4",
    path: "/risk",
    children: [
      {
        title: "企业风险预警",
        id: "4-2",
        path: "/risk/warn",
      },
      {
        title: "专项计划风险跟踪",
        id: "4-1",
        path: "/risk/check",
      },
    ],
  },
  {
    title: "图谱",
    icon: "MostlyCloudy",
    path: "/graph",
    id: "5",
    children: [
      {
        title: "关系图谱",
        id: "5-1",
        path: "/graph/atlas",
      },
    ],
  },
  {
    title: "系统管理",
    icon: "Setting",
    path: "/system",
    id: "3",
    children: [
      {
        title: "用户管理",
        icon: "",
        path: "/system/user",
        id: "3-1",
      },
    ],
  },
];

export { config, menu };
export type { Menu };

