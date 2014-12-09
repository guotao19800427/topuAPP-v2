topu
.config(function ($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl : 'components/school/homepage.html',
			controller  : 'homepageController' 
		})
		.when('/rank/:country/:type',{
			templateUrl :'components/school/school-list.html',
			controller  : 'schoolListController'
		})
    .when('/school/:nid',{
      templateUrl :'components/school/school-profile.html',
      controller  : 'schoolProfileController'
    })
    .when('/user-login',{
      templateUrl :'components/user/user-login.html',
      controller  : 'userLoginController'
    })
    .when('/user-profile',{
      templateUrl :'components/user/user-profile.html',
      controller  : 'userProfileController'
    })
    .when('/user-profile/edit', {
      templateUrl : 'components/user/user-profile-edit.html',
      controller  : 'userProfileEditController'
    })
    .when('/password/edit',{
      templateUrl : 'components/user/user-password-edit.html',
      controller  : 'userPasswordEditController'
    })
    .when('/password/edit/success',{
      templateUrl : 'components/user/user-profile.html'
    })
    .when('/user-regisiter',{
      templateUrl : 'components/user/user-regisiter.html',
      controller  : 'userRegisiterController'
    })
    .when('/user-forgot-password',{
      templateUrl : 'components/user/user-forgot-password.html',
      controller  : 'userForgotPasswordController'
    })
    .when('/ichance/info/:schoolId',{
      templateUrl : 'components/ichance/ichance-achievement.html',
      controller  : 'ichanceAchievementController'
    })
    .when('/ichance/result/:schoolId', {
      templateUrl : 'components/ichance/ichance-result.html',
      controller  : 'ichanceResultController'
    })
		.otherwise({
			redirectTo: '/'
		})
})
//common loading
.constant('$ionicLoadingConfig',{
  template : '<i class="ion-refreshing positive"></i>'
})
//pubilc psot function
.constant('APIPostFn', function(API, options){
  API.post(
      angular.element.param({
        data: options.data
      }) || {},
      function (data) {
        options.success && options.success(data);
      }, 
      function (httpResponse) {
        options.error && options.error(httpResponse);
      }
    )
})

//config request url
.constant('API_HOST','http://beta1.zinchchina.com/api_test')//http://beta1.zinchchina.com/api_test ,http://www.zinch.cn/api
//config rank titles
.constant('RankTitle', {
  "us": {
    "h2": "US News 美国大学本科排名",
    "h3": {
      "nationaluniversity": "国家级大学（大U）（2014）",
      "lac": "文理学院",
      "business": "本科商务专业",
      "engineering": "本科工程专业"
    }
  },
  "uk": {
    "h2": "英国 其他国家大学排名",
    "h3": {
      "guardian": "卫报排名"
    }
  },
  "canada": {
    "h2": "加拿大 其他国家大学排名",
    "h3": {
      "medical_doctoral": "顶尖研究型",
      "Comprehensive": "综合大学",
      "primarily_undergraduate": "普通本科大学"
    }
  },
  "au": {
    "h2": "澳洲 其他国家大学排名",
    "h3": {
      "undergrad": "大学星级排名"
    }
  },
  "world": {
    "h2": "QS 其他国家大学排名",
    "h3": {
      "qs-world-university-rankings": "世界大学排名"
    }
  }
})
//current status
.constant('CurrentStatus', function(){
  var CurrentStatus = {};
  CurrentStatus.mapping = [
    {key: '初一', label: '初一', order: 1},
    {key: '初二', label: '初二', order: 1},
    {key: '初三', label: '初三', order: 1},
    {key: '高一', label: '高一', order: 1},
    {key: '高二', label: '高二', order: 1},
    {key: '高三', label: '高三', order: 1},
    {key: '大一', label: '大一', order: 1},
    {key: '大二', label: '大二', order: 1},
    {key: '大三', label: '大三', order: 1},
    {key: '大四', label: '大四', order: 1},
    {key: '本科毕业', label: '本科毕业', order: 1}
  ];
  return CurrentStatus;
})
//class rank
.constant('ClassRank', function () {
  var Classrank = {};
  Classrank.mapping = [
    {key: '1', label: '前1%', order: 1},
    {key: '5', label: '1% - 5%', order: 1},
    {key: '6', label: '5% - 10%', order: 1},
    {key: '10', label: '10% - 20%', order: 1},
    {key: '16', label: '20% - 30%', order: 1},
    {key: '31', label: '30% - 40%', order: 1},
    {key: '40', label: '40% - 50%', order: 1},
    {key: '50', label: '50% - 60%', order: 1},
    {key: '51', label: '60%以下', order: 1}
  ];

  return Classrank;
})
//location
.constant('Location', function () {

  var Location = {};

  Location.provinceMapping = [
    {key: 'Beijing', label: '北京', order: 1},
    {key: 'Shanghai', label: '上海', order: 1},
    {key: 'Tianjin', label: '天津', order: 1},
    {key: 'Chongqing', label: '重庆', order: 1},
    {key: 'Hebei', label: '河北', order: 1},
    {key: 'Shanxi', label: '山西', order: 1},
    {key: 'Nei Mongol', label: '内蒙古', order: 1},
    {key: 'Liaoning', label: '辽宁', order: 1},
    {key: 'Jilin', label: '吉林', order: 1},
    {key: 'Heilongjiang', label: '黑龙江', order: 1},
    {key: 'Jiangsu', label: '江苏', order: 1},
    {key: 'Zhejiang', label: '浙江', order: 1},
    {key: 'Anhui', label: '安徽', order: 1},
    {key: 'Fujian', label: '福建', order: 1},
    {key: 'Jiangxi', label: '江西', order: 1},
    {key: 'Shandong', label: '山东', order: 1},
    {key: 'Henan', label: '河南', order: 1},
    {key: 'Hubei', label: '湖北', order: 1},
    {key: 'Hunan', label: '湖南', order: 1},
    {key: 'Guangdong', label: '广东', order: 1},
    {key: 'Guangxi', label: '广西', order: 1},
    {key: 'Hainan', label: '海南', order: 1},
    {key: 'Sichuan', label: '四川', order: 1},
    {key: 'Guizhou', label: '贵州', order: 1},
    {key: 'Yunnan', label: '云南', order: 1},
    {key: 'Xizang (Tibet)', label: '西藏', order: 1},
    {key: 'Shaanxi', label: '陕西', order: 1},
    {key: 'Gansu', label: '甘肃', order: 1},
    {key: 'Qinghai', label: '青海', order: 1},
    {key: 'Ningxia', label: '宁夏', order: 1},
    {key: 'Xinjiang', label: '新疆', order: 1},
    {key: 'Taiwan', label: '台湾', order: 1},
    {key: 'Xianggang', label: '香港', order: 1},
    {key: 'Aomen', label: '澳门', order: 1}
  ];
  Location.cityMapping = {
    "Anhui": [
      {key: 'Hefei(*)', label: '合肥', order: 1},
      {key: 'Anqing', label: '安庆', order: 1},
      {key: 'Bengbu', label: '蚌埠', order: 1},
      {key: 'Bozhou', label: '亳州', order: 1},
      {key: 'Chaohu', label: '巢湖', order: 1},
      {key: 'Chuzhou', label: '滁州', order: 1},
      {key: 'Fuyang', label: '阜阳', order: 1},
      {key: 'Guichi', label: '贵池', order: 1},
      {key: 'Huaibei', label: '淮北', order: 1},
      {key: 'Huaihua', label: '淮化', order: 1},
      {key: 'Huainan', label: '淮南', order: 1},
      {key: 'Huangshan', label: '黄山', order: 1},
      {key: 'Jiuhuashan', label: '九华山', order: 1},
      {key: 'Liuan', label: '六安', order: 1},
      {key: 'Maanshan', label: '马鞍山', order: 1},
      {key: 'Suzhou', label: '宿州', order: 1},
      {key: 'Tongling', label: '铜陵', order: 1},
      {key: 'Tunxi', label: '屯溪', order: 1},
      {key: 'Wuhu', label: '芜湖', order: 1},
      {key: 'Xuancheng', label: '宣城', order: 1}
    ],
    "Beijing": [
      {key: 'Dongcheng', label: '东城', order: 1},
      {key: 'Xicheng', label: '西城', order: 1},
      {key: 'Chongwen', label: '崇文', order: 1},
      {key: 'Xuanwu', label: '宣武', order: 1},
      {key: 'Chaoyang', label: '朝阳', order: 1},
      {key: 'Fengtai', label: '丰台', order: 1},
      {key: 'Shijingshan', label: '石景山', order: 1},
      {key: 'Haidian', label: '海淀', order: 1},
      {key: 'Mentougou', label: '门头沟', order: 1},
      {key: 'Fangshan', label: '房山', order: 1},
      {key: 'Tongzhou', label: '通州', order: 1},
      {key: 'Shunyi', label: '顺义', order: 1},
      {key: 'Changping', label: '昌平', order: 1},
      {key: 'Daxing', label: '大兴', order: 1},
      {key: 'Pinggu', label: '平谷', order: 1},
      {key: 'Huairou', label: '怀柔', order: 1},
      {key: 'Miyun', label: '密云', order: 1},
      {key: 'Yanqing', label: '延庆', order: 1}
    ],
    "Chongqing": [
      {key: 'Wanzhou', label: '万州', order: 1},
      {key: 'Fuling', label: '涪陵', order: 1},

      {key: 'Yuzhou', label: '渝中', order: 1},
      {key: 'Dadukou', label: '大渡口', order: 1},
      {key: 'Jiangbei', label: '江北', order: 1},
      {key: 'Shapingba', label: '沙坪坝', order: 1},
      {key: 'Jiulongpo', label: '九龙坡', order: 1},
      {key: 'Nanan', label: '南岸', order: 1},
      {key: 'Beibei', label: '北碚', order: 1},
      {key: 'Wansheng', label: '万盛', order: 1},
      {key: 'Shuangjiao', label: '双桥', order: 1},
      {key: 'Yubei', label: '渝北', order: 1},
      {key: 'Banan', label: '巴南', order: 1},
      {key: 'Qianjiang', label: '黔江', order: 1},
      {key: 'Changshou', label: '长寿', order: 1},
      {key: 'Qijiang', label: '綦江', order: 1},
      {key: 'Tongnan', label: '潼南', order: 1},
      {key: 'Tongliang', label: '铜梁', order: 1},
      {key: 'Dazu', label: '大足', order: 1},
      {key: 'Rongchang', label: '荣昌', order: 1},
      {key: 'Bishan', label: '璧山', order: 1},
      {key: 'Liangping', label: '梁平', order: 1},
      {key: 'Chengkou', label: '城口', order: 1},
      {key: 'Fengdu', label: '丰都', order: 1},
      {key: 'Dianjiang', label: '垫江', order: 1},
      {key: 'Wulong', label: '武隆', order: 1},
      {key: 'Zhongxian', label: '忠县', order: 1},
      {key: 'Kaixian', label: '开县', order: 1},
      {key: 'Yunyang', label: '云阳', order: 1},
      {key: 'Fengjie', label: '奉节', order: 1},
      {key: 'Wushan', label: '巫山', order: 1},
      {key: 'Wuxi', label: '巫溪', order: 1},
      {key: 'Shizhu', label: '石柱', order: 1},
      {key: 'Xiushan', label: '秀山', order: 1},
      {key: 'Youyang', label: '酉阳', order: 1},
      {key: 'Pengshui', label: '彭水', order: 1},
      {key: 'JiangJin', label: '江津', order: 1},
      {key: 'Hechuan', label: '合川', order: 1},
      {key: 'Yongzhou', label: '永川', order: 1},
      {key: 'Nanzhou', label: '南州', order: 1}
    ],
    "Fujian": [
      {key: 'Fuzhou(*)', label: '福州', order: 1},
      {key: 'Fuan', label: '福安', order: 1},
      {key: 'Longyan', label: '龙岩', order: 1},
      {key: 'Nanping', label: '南平', order: 1},
      {key: 'Ningde', label: '宁德', order: 1},
      {key: 'Putian', label: '莆田', order: 1},
      {key: 'Quanzhou', label: '泉州', order: 1},
      {key: 'Sanming', label: '三明', order: 1},
      {key: 'Shaowu', label: '邵武', order: 1},
      {key: 'Shishi', label: '石狮', order: 1},
      {key: 'Jinjiang', label: '晋江', order: 1},
      {key: 'YongAn', label: '永安', order: 1},
      {key: 'Wuyishan', label: '武夷山', order: 1},
      {key: 'Xiamen', label: '厦门', order: 1},
      {key: 'Zhangzhou', label: '漳州', order: 1}
    ],
    "Gansu": [
      {key: 'Lanzhou(*)', label: '兰州', order: 1},
      {key: 'Baiyin', label: '白银', order: 1},
      {key: 'Dingxi', label: '定西', order: 1},
      {key: 'Dunhuang', label: '敦煌', order: 1},
      {key: 'Gannan', label: '甘南', order: 1},
      {key: 'Jinchang', label: '金昌', order: 1},
      {key: 'Jiuquan', label: '酒泉', order: 1},
      {key: 'Linxia', label: '临夏', order: 1},
      {key: 'Pingliang', label: '平凉', order: 1},
      {key: 'Tianshui', label: '天水', order: 1},
      {key: 'Wudu', label: '武都', order: 1},
      {key: 'Wuwei', label: '武威', order: 1},
      {key: 'Xifeng', label: '西峰', order: 1},
      {key: 'Jiayuguan', label: '嘉峪关', order: 1},
      {key: 'Zhangye', label: '张掖', order: 1}
    ],
    "Guangdong": [
      {key: 'Guangzhou(*)', label: '广州', order: 1},
      {key: 'Chaoyang', label: '潮阳', order: 1},
      {key: 'Chaozhou', label: '潮州', order: 1},
      {key: 'Chenghai', label: '澄海', order: 1},
      {key: 'Dongguan', label: '东莞', order: 1},
      {key: 'Foshan', label: '佛山', order: 1},
      {key: 'Heyuan', label: '河源', order: 1},
      {key: 'Huizhou', label: '惠州', order: 1},
      {key: 'Jiangmen', label: '江门', order: 1},
      {key: 'Jieyang', label: '揭阳', order: 1},
      {key: 'Kaiping', label: '开平', order: 1},
      {key: 'Maoming', label: '茂名', order: 1},
      {key: 'Meizhou', label: '梅州', order: 1},
      {key: 'Qingyuan', label: '东莞', order: 1},
      {key: 'Shantou', label: '汕头', order: 1},
      {key: 'Shanwei', label: '汕尾', order: 1},
      {key: 'Shaoguan', label: '韶关', order: 1},
      {key: 'Shenzhen', label: '深圳', order: 1},
      {key: 'Shunde', label: '顺德', order: 1},
      {key: 'Yangjiang', label: '阳江', order: 1},
      {key: 'Yingde', label: '英德', order: 1},
      {key: 'Yunfu', label: '云浮', order: 1},
      {key: 'Zengcheng', label: '增城', order: 1},
      {key: 'Zhanjiang', label: '湛江', order: 1},
      {key: 'Zhaoqing', label: '肇庆', order: 1},
      {key: 'Zhongshan', label: '中山', order: 1},
      {key: 'Zhuhai', label: '珠海', order: 1}
    ],
    "Guangxi": [
      {key: 'Nanning(*)', label: '南宁', order: 1},
      {key: 'Baise', label: '百色', order: 1},
      {key: 'Beihai', label: '北海', order: 1},
      {key: 'Guilin', label: '桂林', order: 1},
      {key: 'Fangchenggang', label: '防城港', order: 1},
      {key: 'Hechi', label: '河池', order: 1},
      {key: 'Hezhou', label: '贺州', order: 1},
      {key: 'Liuzhou', label: '柳州', order: 1},
      {key: 'Laibin', label: '来宾', order: 1},
      {key: 'Qinzhou', label: '钦州', order: 1},
      {key: 'Wuzhou', label: '梧州', order: 1},
      {key: 'Guigang', label: '贵港', order: 1},
      {key: 'Yulin', label: '玉林', order: 1}
    ],
    "Guizhou": [
      {key: 'Guiyang(*)', label: '贵阳', order: 1},
      {key: 'Anshun', label: '安顺', order: 1},
      {key: 'Bijie', label: '毕节', order: 1},
      {key: 'Dujun', label: '都匀', order: 1},
      {key: 'Kaili', label: '凯里', order: 1},
      {key: 'Liupanshui', label: '六盘水', order: 1},
      {key: 'Tongren', label: '铜仁', order: 1},
      {key: 'Xingyi', label: '兴义', order: 1},
      {key: 'Yuping', label: '玉屏', order: 1},
      {key: 'Zunyi', label: '遵义', order: 1}
    ],
    "Hainan": [
      {key: 'Haikou(*)', label: '海口', order: 1},
      {key: 'Sanyan', label: '三亚', order: 1},
      {key: 'Wuzhishan', label: '五指山', order: 1},
      {key: 'Qionghai', label: '琼海', order: 1},
      {key: 'Danzhou', label: '儋州', order: 1},
      {key: 'Wenchang', label: '文昌', order: 1},
      {key: 'Wanning', label: '万宁', order: 1},
      {key: 'Dongfang', label: '东方', order: 1},
      {key: 'Anding', label: '安定', order: 1},
      {key: 'Tunchang', label: '屯昌', order: 1},
      {key: 'Chengmai', label: '澄迈', order: 1},
      {key: 'Lingao', label: '临高', order: 1},
      {key: 'Wanning', label: '万宁', order: 1},
      {key: 'Baishalizu', label: '白沙黎族', order: 1},
      {key: 'Changjianglizu', label: '昌江黎族', order: 1},
      {key: 'LeDonglizu', label: '乐东黎族', order: 1},
      {key: 'LingshuiliZu', label: '陵水黎族', order: 1},
      {key: 'Baotinglizu', label: '保亭黎族', order: 1},
      {key: 'Qiongzhonglizu', label: '琼中黎族', order: 1},
      {key: 'the Xisha Islands', label: '西沙群岛', order: 1},
      {key: 'the Nansha Islands', label: '南沙群岛', order: 1},
      {key: 'the Zhongsha Islands', label: '中沙群岛', order: 1}

    ],
    "Hebei": [
      {key: 'Shijiazhuang(*)', label: '石家庄', order: 1},
      {key: 'Baoding', label: '保定', order: 1},
      {key: 'Beidaihe', label: '北戴河', order: 1},
      {key: 'Cangzhou', label: '沧州', order: 1},
      {key: 'Chengde', label: '承德', order: 1},
      {key: 'Fengrun', label: '丰润', order: 1},
      {key: 'Handan', label: '邯郸', order: 1},
      {key: 'Hengshui', label: '衡水', order: 1},
      {key: 'Langfang', label: '廊坊', order: 1},
      {key: 'Nandaihe', label: '南戴河', order: 1},
      {key: 'Qinhuangdao', label: '秦皇岛', order: 1},
      {key: 'Tangshan', label: '唐山', order: 1},
      {key: 'Xincheng', label: '新城', order: 1},
      {key: 'Xingtai', label: '邢台', order: 1},
      {key: 'Zhangjiakou', label: '张家口', order: 1}
    ],
    "Heilongjiang": [
      {key: 'Harbin(*)', label: '哈尔滨', order: 1},
      {key: 'Beian', label: '北安', order: 1},
      {key: 'Daqing', label: '大庆', order: 1},
      {key: 'DaHingganLing', label: '大兴安岭', order: 1},
      {key: 'Hegang', label: '鹤岗', order: 1},
      {key: 'Heihe', label: '黑河', order: 1},
      {key: 'Kiamusze', label: '佳木斯', order: 1},
      {key: 'Jixi', label: '鸡西', order: 1},
      {key: 'Mutankiang', label: '牡丹江', order: 1},
      {key: 'Qiqihar', label: '齐齐哈尔', order: 1},
      {key: 'Qitaihe', label: '七台河', order: 1},
      {key: 'Shuangyashan', label: '双鸭山', order: 1},
      {key: 'Suihua', label: '绥化', order: 1},
      {key: 'Yichun', label: '伊春', order: 1}
    ],
    "Henan": [
      {key: 'Zhengzhou(*)', label: '郑州', order: 1},
      {key: 'Anyang', label: '安阳', order: 1},
      {key: 'Hebi', label: '鹤壁', order: 1},
      {key: 'Huangchuan', label: '潢川', order: 1},
      {key: 'Jiaozuo', label: '焦作', order: 1},
      {key: 'Jiyuan', label: '济源', order: 1},
      {key: 'Kaifeng', label: '开封', order: 1},
      {key: 'Luohe', label: '漯河', order: 1},
      {key: 'Luoyang', label: '洛阳', order: 1},
      {key: 'Nanyang', label: '南阳', order: 1},
      {key: 'Pingdingshan', label: '平顶山', order: 1},
      {key: 'Puyang', label: '濮阳', order: 1},
      {key: 'Sanmenxia', label: '三门峡', order: 1},
      {key: 'Shangqiu', label: '商丘', order: 1},
      {key: 'Xinxiang', label: '新乡', order: 1},
      {key: 'Xinyang', label: '信阳', order: 1},
      {key: 'Xuchang', label: '许昌', order: 1},
      {key: 'Zhoukou', label: '周口', order: 1},
      {key: 'Zhumadian', label: '驻马店', order: 1}
    ],
    "Xianggang": [
      {key: 'HongKong', label: '香港', order: 1},
      {key: 'Kowloon', label: '九龙', order: 1},
      {key: 'New Territories', label: '新界', order: 1}
    ],
    "Hubei": [
      {key: 'Wuhan(*)', label: '武汉', order: 1},
      {key: 'Enshi', label: '恩施', order: 1},
      {key: 'Ezhou', label: '鄂州', order: 1},
      {key: 'Huanggang', label: '黄冈', order: 1},
      {key: 'Huangshi', label: '黄石', order: 1},
      {key: 'Jinmen', label: '荆门', order: 1},
      {key: 'Jinzhou', label: '荆州', order: 1},
      {key: 'Qianjiang', label: '潜江', order: 1},
      {key: 'Shiyan', label: '十堰', order: 1},
      {key: 'Suizhou', label: '随州', order: 1},
      {key: 'Wuxue', label: '武穴', order: 1},
      {key: 'Xiantao', label: '仙桃', order: 1},
      {key: 'Xianning', label: '咸宁', order: 1},
      {key: 'Xiangyang', label: '襄阳', order: 1},
      {key: 'Xiangfan', label: '襄樊', order: 1},
      {key: 'Xiaogan', label: '孝感', order: 1},
      {key: 'Yichang', label: '宜昌', order: 1}
    ],
    "Hunan": [
      {key: 'Changsha(*)', label: '长沙', order: 1},
      {key: 'Changde', label: '常德', order: 1},
      {key: 'Chenzhou', label: '郴州', order: 1},
      {key: 'Hengyang', label: '衡阳', order: 1},
      {key: 'Huaihua', label: '怀化', order: 1},
      {key: 'Jishou', label: '吉首', order: 1},
      {key: 'Loudi', label: '娄底', order: 1},
      {key: 'Shaoyang', label: '邵阳', order: 1},
      {key: 'Xiangtan', label: '湘潭', order: 1},
      {key: 'Yiyang', label: '益阳', order: 1},
      {key: 'Yueyang', label: '岳阳', order: 1},
      {key: 'Yongzhou', label: '永州', order: 1},
      {key: 'Zhangjiajie', label: '张家界', order: 1},
      {key: 'Zhuzhou', label: '株洲', order: 1}
    ],
    "Jiangsu": [
      {key: 'Nanjing(*)', label: '南京', order: 1},
      {key: 'Changshu', label: '常熟', order: 1},
      {key: 'Changzhou', label: '常州', order: 1},
      {key: 'Haimen', label: '海门', order: 1},
      {key: 'Huaian', label: '淮安', order: 1},
      {key: 'Jiangdu', label: '江都', order: 1},
      {key: 'Jiangyin', label: '江阴', order: 1},
      {key: 'Kunshan', label: '昆山', order: 1},
      {key: 'Lianyungang', label: '连云港', order: 1},
      {key: 'Nantong', label: '南通', order: 1},
      {key: 'Qidong', label: '启东', order: 1},
      {key: 'Shuyang', label: '沭阳', order: 1},
      {key: 'Suqian', label: '宿迁', order: 1},
      {key: 'Suzhou', label: '苏州', order: 1},
      {key: 'Taicang', label: '太仓', order: 1},
      {key: 'Taizhou', label: '泰州', order: 1},
      {key: 'Tongli', label: '同里', order: 1},
      {key: 'Wuxi', label: '无锡', order: 1},
      {key: 'Xuzhou', label: '徐州', order: 1},
      {key: 'Yancheng', label: '盐城', order: 1},
      {key: 'Yangzhou', label: '扬州', order: 1},
      {key: 'Yixing', label: '宜兴', order: 1},
      {key: 'Yizheng', label: '仪征', order: 1},
      {key: 'Zhangjiagang', label: '张家港', order: 1},
      {key: 'Zhenjiang', label: '镇江', order: 1},
      {key: 'Zhouzhuang', label: '周庄', order: 1}
    ],
    "Jiangxi": [
      {key: 'Nanchang(*)', label: '南昌', order: 1},
      {key: 'Fuzhou', label: '抚州', order: 1},
      {key: 'Ganzhou', label: '赣州', order: 1},
      {key: 'Jian', label: '吉安', order: 1},
      {key: 'Jingdezhen', label: '景德镇', order: 1},
      {key: 'Jinggangshan', label: '井冈山', order: 1},
      {key: 'Jiujiang', label: '九江', order: 1},
      {key: 'Lushan', label: '庐山', order: 1},
      {key: 'Pingxiang', label: '萍乡', order: 1},
      {key: 'Shaorao', label: '上饶', order: 1},
      {key: 'Xinyu', label: '新余', order: 1},
      {key: 'Yichun', label: '宜春', order: 1},
      {key: 'Yingtan', label: '鹰潭', order: 1}
    ],
    "Jilin": [
      {key: 'Changchun(*)', label: '吉林', order: 1},
      {key: 'Baicheng', label: '白城', order: 1},
      {key: 'Baishan', label: '白山', order: 1},
      {key: 'Hunchun', label: '珲春', order: 1},
      {key: 'Liaoyuan', label: '辽源', order: 1},
      {key: 'Meihe', label: '梅河口', order: 1},
      {key: 'Jilin', label: '吉林', order: 1},
      {key: 'Siping', label: '四平', order: 1},
      {key: 'Songyuan', label: '松原', order: 1},
      {key: 'Tonghua', label: '通化', order: 1},
      {key: 'Yanji', label: '延吉', order: 1}
    ],
    "Liaoning": [
      {key: 'Shenyang(*)', label: '沈阳', order: 1},
      {key: 'Anshan', label: '鞍山', order: 1},
      {key: 'Benxi', label: '本溪', order: 1},
      {key: 'Chaoyang', label: '朝阳', order: 1},
      {key: 'Dalian', label: '大连', order: 1},
      {key: 'Dandong', label: '丹东', order: 1},
      {key: 'Fushun', label: '抚顺', order: 1},
      {key: 'Fuxin', label: '阜新', order: 1},
      {key: 'Huludao', label: '葫芦岛', order: 1},
      {key: 'Jinzhou', label: '锦州', order: 1},
      {key: 'Liaoyang', label: '辽阳', order: 1},
      {key: 'Panjin', label: '盘锦', order: 1},
      {key: 'Tieling', label: '铁岭', order: 1},
      {key: 'Yingkou', label: '营口', order: 1}
    ],
    "Aomen": [
      {key: 'Macau', label: '澳门', order: 1}
    ],
    "Nei Mongol": [
      {key: 'Hohhot(*)', label: '呼和浩特', order: 1},
      {key: 'Alxa League', label: '阿拉善盟', order: 1},
      {key: 'Baotou', label: '包头', order: 1},
      {key: 'Chifeng', label: '赤峰', order: 1},
      {key: 'Dongsheng', label: '东胜', order: 1},
      {key: 'Hailar', label: '海拉尔', order: 1},
      {key: 'Jining', label: '集宁', order: 1},
      {key: 'Linhe', label: '临河', order: 1},
      {key: 'Tongliao', label: '通辽', order: 1},
      {key: 'Wuhai', label: '乌海', order: 1},
      {key: 'Ulanhot', label: '乌兰察布', order: 1},
      {key: 'Ordos', label: '鄂尔多斯', order: 1},
      {key: 'Xilinhot', label: '锡林郭勒', order: 1}
    ],
    "Ningxia": [
      {key: 'Yinchuan(*)', label: '银川', order: 1},
      {key: 'Guyuan', label: '固原', order: 1},
      {key: 'Zhongwei', label: '中卫', order: 1},
      {key: 'Shizuishan', label: '石嘴山', order: 1},
      {key: 'Wuzhong', label: '吴中', order: 1}
    ],
    "Qinghai": [
      {key: 'Xining(*)', label: '西宁', order: 1},
      {key: 'Delingha', label: '德令哈', order: 1},
      {key: 'Golmud', label: '格尔木', order: 1},
      {key: 'Gonghe', label: '共和', order: 1},
      {key: 'Haidong', label: '海东', order: 1},
      {key: 'Haiyan', label: '海晏', order: 1},
      {key: 'Maqin', label: '玛沁', order: 1},
      {key: 'Tongren', label: '同仁', order: 1},
      {key: 'Yushu', label: '玉树', order: 1}
    ],
    "Shandong": [
      {key: 'Jinan(*)', label: '济南', order: 1},
      {key: 'Binzhou', label: '滨州', order: 1},
      {key: 'Yanzhou', label: '兖州', order: 1},
      {key: 'Dezhou', label: '德州', order: 1},
      {key: 'Dongying', label: '东营', order: 1},
      {key: 'Heze', label: '菏泽', order: 1},
      {key: 'Jining', label: '济宁', order: 1},
      {key: 'Laiwu', label: '莱芜', order: 1},
      {key: 'Liaocheng', label: '聊城', order: 1},
      {key: 'Linyi', label: '临沂', order: 1},
      {key: 'Penglai', label: '蓬莱', order: 1},
      {key: 'Tsingtao', label: '青岛', order: 1},
      {key: 'Qufu', label: '曲阜', order: 1},
      {key: 'Rizhao', label: '日照', order: 1},
      {key: 'Taian', label: '泰安', order: 1},
      {key: 'Weifang', label: '潍坊', order: 1},
      {key: 'Weihai', label: '威海', order: 1},
      {key: 'Yantai', label: '烟台', order: 1},
      {key: 'Zaozhuang', label: '枣庄', order: 1},
      {key: 'Zibo', label: '淄博', order: 1}
    ],
    "Shanghai": [
      {key: 'Chongming', label: '崇明', order: 1},
      {key: 'Huangpu', label: '黄浦', order: 1},
      {key: 'Luwan', label: '卢湾', order: 1},
      {key: 'Xuhui', label: '徐汇', order: 1},
      {key: 'Changning', label: '长宁', order: 1},
      {key: 'Jingan', label: '静安', order: 1},
      {key: 'Putuo', label: '普陀', order: 1},
      {key: 'Zhabei', label: '闸北', order: 1},
      {key: 'Hongkou', label: '虹口', order: 1},
      {key: 'Yangpu', label: '杨浦', order: 1},
      {key: 'Minxing', label: '闵行', order: 1},
      {key: 'Baoshan', label: '宝山', order: 1},
      {key: 'Jiading', label: '嘉定', order: 1},
      {key: 'Pudong', label: '浦东', order: 1},
      {key: 'Jinshan', label: '金山', order: 1},
      {key: 'Songjiang', label: '松江', order: 1},
      {key: 'Qingpu', label: '青浦', order: 1},
      {key: 'Nanhui', label: '南汇', order: 1},
      {key: 'Fengxian', label: '奉贤', order: 1},
      {key: 'Zhujiajiao', label: '朱家角', order: 1}
    ],
    "Shanxi": [
      {key: 'Taiyuan(*)', label: '太原', order: 1},
      {key: 'Changzhi', label: '长治', order: 1},
      {key: 'Datong', label: '大同', order: 1},
      {key: 'Houma', label: '侯马', order: 1},
      {key: 'Jincheng', label: '晋城', order: 1},
      {key: 'Lishi', label: '离石', order: 1},
      {key: 'Linfen', label: '临汾', order: 1},
      {key: 'Ningwu', label: '宁武', order: 1},
      {key: 'Shuozhou', label: '朔州', order: 1},
      {key: 'Xinzhou', label: '忻州', order: 1},
      {key: 'Yangquan', label: '阳泉', order: 1},
      {key: 'Yuci', label: '榆次', order: 1},
      {key: 'Yuncheng', label: '运城', order: 1}
    ],
    "Shaanxi": [
      {key: 'Xian(*)', label: '西安', order: 1},
      {key: 'Ankang', label: '安康', order: 1},
      {key: 'Baoji', label: '宝鸡', order: 1},
      {key: 'Hanzhong', label: '汉中', order: 1},
      {key: 'Weinan', label: '渭南', order: 1},
      {key: 'Shangzhou', label: '商州', order: 1},
      {key: 'Suide', label: '绥德', order: 1},
      {key: 'Tongzhou', label: '同洲', order: 1},
      {key: 'Xianyang', label: '咸阳', order: 1},
      {key: 'Yanan', label: '延安', order: 1},
      {key: 'Yulin', label: '榆林', order: 1}
    ],
    "Sichuan": [
      {key: 'Chengdu(*)', label: '成都', order: 1},
      {key: 'Bazhou', label: '巴中', order: 1},
      {key: 'Dazhou', label: '达州', order: 1},
      {key: 'Deyang', label: '德阳', order: 1},
      {key: 'Dujiangyan', label: '都江堰', order: 1},
      {key: 'EMeishan', label: '峨眉山', order: 1},
      {key: 'Fuling', label: '涪陵', order: 1},
      {key: 'Guangan', label: '广安', order: 1},
      {key: 'Guangyuan', label: '广元', order: 1},
      {key: 'Jiuzhaigou', label: '九寨沟', order: 1},
      {key: 'Kangding', label: '康定', order: 1},
      {key: 'Leshan', label: '乐山', order: 1},
      {key: 'Luzhou', label: '泸州', order: 1},
      {key: 'Barkang', label: '巴康', order: 1},
      {key: 'Mianyang', label: '绵阳', order: 1},
      {key: 'Meishan', label: '眉山', order: 1},
      {key: 'Nanchong', label: '南充', order: 1},
      {key: 'Neijiang', label: '内江', order: 1},
      {key: 'Panzhihua', label: '攀枝花', order: 1},
      {key: 'Suining', label: '遂宁', order: 1},
      {key: 'Wenchuan', label: '汶川', order: 1},
      {key: 'Xichang', label: '西昌', order: 1},
      {key: 'Yaan', label: '雅安', order: 1},
      {key: 'Yibin', label: '宜宾', order: 1},
      {key: 'Zigong', label: '自贡', order: 1},
      {key: 'Ziyang', label: '资阳', order: 1}
    ],
    "Taiwan": [
      {key: 'Taipei(*)', label: '台北', order: 1},
      {key: 'Keelung', label: '基隆', order: 1},
      {key: 'Tainan', label: '台南', order: 1},
      {key: 'Taichung', label: '台中', order: 1},
      {key: 'Kaohsiung', label: '高雄', order: 1},
      {key: 'Pingtung', label: '屏东', order: 1},
      {key: 'Nantou', label: '南投', order: 1},
      {key: 'Yunlin', label: '云林', order: 1},
      {key: 'Hsinchu', label: '新竹', order: 1},
      {key: 'Changhua', label: '彰化', order: 1},
      {key: 'Maoli', label: '毛利', order: 1},
      {key: 'Chiayi', label: '嘉义', order: 1},
      {key: 'Hualien', label: '花莲', order: 1},
      {key: 'Taoyuan', label: '桃园', order: 1},
      {key: 'Yilan', label: '宜兰', order: 1},
      {key: 'Taitung', label: '台东', order: 1},
      {key: 'Quemoy', label: '金门', order: 1},
      {key: 'Matsu', label: '马祖', order: 1},
      {key: 'Penghu', label: '澎湖', order: 1},
      {key: 'Others', label: '其他', order: 1}
    ],
    "Tianjin": [
      {key: 'Tianjin', label: '天津', order: 1},
      {key: 'Heping', label: '和平', order: 1},
      {key: 'Dongli', label: '东丽', order: 1},
      {key: 'Hedong', label: '河东', order: 1},
      {key: 'Xiqing', label: '西青', order: 1},
      {key: 'Hexi', label: '河西', order: 1},
      {key: 'Jinnan', label: '津南', order: 1},
      {key: 'Nankai', label: '南开', order: 1},
      {key: 'Beichen', label: '北辰', order: 1},
      {key: 'Hebei', label: '河北', order: 1},
      {key: 'Wuqing', label: '武清', order: 1},
      {key: 'Hongqiao', label: '红桥', order: 1},
      {key: 'Tanggu', label: '塘沽', order: 1},
      {key: 'Hangu', label: '汉沽', order: 1},
      {key: 'Dagang', label: '大港', order: 1},
      {key: 'Ninghe', label: '宁河', order: 1},
      {key: 'Jinghai', label: '静海', order: 1},
      {key: 'baodi', label: '宝坻', order: 1},
      {key: 'Jixian', label: '蓟县', order: 1}
    ],
    "Xinjiang": [
      {key: 'Urumqi(*)', label: '乌鲁木齐', order: 1},
      {key: 'Aksu', label: '阿克苏', order: 1},
      {key: 'Altay', label: '阿勒泰地', order: 1},
      {key: 'Artush', label: '阿图什', order: 1},
      {key: 'Bole', label: '博乐', order: 1},
      {key: 'Changji', label: '昌吉', order: 1},
      {key: 'Dongshan', label: '东山', order: 1},
      {key: 'Kumul', label: '哈密', order: 1},
      {key: 'Hotan', label: '和田', order: 1},
      {key: 'Kashgar', label: '喀什', order: 1},
      {key: 'Karamay', label: '克拉玛依', order: 1},
      {key: 'Kuqa', label: '库车', order: 1},
      {key: 'Korla', label: '库尔勒', order: 1},
      {key: 'Kuytun', label: '奎屯', order: 1},
      {key: 'Shihezi', label: '石河子', order: 1},
      {key: 'Tacheng', label: '塔城', order: 1},
      {key: 'Turpan', label: '吐鲁番', order: 1},
      {key: 'Yining', label: '伊宁', order: 1}
    ],
    "Xizang (Tibet)": [
      {key: 'Lhasa(*)', label: '拉萨', order: 1},
      {key: 'Nagri', label: '阿里', order: 1},
      {key: 'Qamdo', label: '昌都', order: 1},
      {key: 'Nyingchi', label: '林芝', order: 1},
      {key: 'Nagchu', label: '那曲', order: 1},
      {key: 'Shigatse', label: '日喀则', order: 1},
      {key: 'Shannan', label: '山南', order: 1}
    ],
    "Twaiwan": [
      {key: 'Taipei(*)', label: '台北', order: 1},
      {key: 'Kaohsioung', label: '高雄', order: 1}
    ],
    "Yunnan": [
      {key: 'Kunming(*)', label: '昆明', order: 1},
      {key: 'Dali', label: '大理', order: 1},
      {key: 'Baoshan', label: '宝山', order: 1},
      {key: 'Chuxiong', label: '楚雄', order: 1},
      {key: 'Dali', label: '大理', order: 1},
      {key: 'Dongchuan', label: '东川', order: 1},
      {key: 'Gejiu', label: '个旧', order: 1},
      {key: 'Jinghong', label: '景洪', order: 1},
      {key: 'Kaiyuan', label: '开远', order: 1},
      {key: 'Lincang', label: '临沧', order: 1},
      {key: 'Lijiang', label: '丽江', order: 1},
      {key: 'Liuku', label: '六库', order: 1},
      {key: 'Luxi', label: '泸西', order: 1},
      {key: 'Qujing', label: '曲靖', order: 1},
      {key: 'Simao', label: '思茅', order: 1},
      {key: 'Wenshan', label: '文山', order: 1},
      {key: 'Xishuangbanna', label: '西双版纳', order: 1},
      {key: 'Yuxi', label: '玉溪', order: 1},
      {key: 'Zhongdian', label: '香格里拉', order: 1},
      {key: 'Zhaotong', label: '昭通', order: 1}
    ],
    "Zhejiang": [
      {key: 'Hangzhou(*)', label: '杭州', order: 1},
      {key: 'Anji', label: '安吉', order: 1},
      {key: 'Cixi', label: '慈溪', order: 1},
      {key: 'Dinghai', label: '定海', order: 1},
      {key: 'Fenghua', label: '奉化', order: 1},
      {key: 'Haiyan', label: '海盐', order: 1},
      {key: 'Huangyan', label: '黄岩', order: 1},
      {key: 'Huzhou', label: '湖州', order: 1},
      {key: 'Jiaxing', label: '嘉兴', order: 1},
      {key: 'Jinhua', label: '金华', order: 1},
      {key: 'Linan', label: '临安', order: 1},
      {key: 'Linhai', label: '临海', order: 1},
      {key: 'Lishui', label: '丽水', order: 1},
      {key: 'Ningbo', label: '宁波', order: 1},
      {key: 'Ouhai', label: '瓯海', order: 1},
      {key: 'Pinghu', label: '平湖', order: 1},
      {key: 'Qiandaohu', label: '千岛湖', order: 1},
      {key: 'Quzhou', label: '衢州', order: 1},
      {key: 'Jiangshan', label: '江山', order: 1},
      {key: 'Ruian', label: '瑞安', order: 1},
      {key: 'Shaoxing', label: '绍兴', order: 1},
      {key: 'Shengzhou', label: '嵊州', order: 1},
      {key: 'Taizhou', label: '台州', order: 1},
      {key: 'Wenling', label: '温岭', order: 1},
      {key: 'Wenzhou', label: '温州', order: 1},
      {key: 'Yuyao', label: '余姚', order: 1},
      {key: 'Zhoushan', label: '舟山', order: 1}
    ],
    "Overseas": [
      {key: 'America(*)', label: '美国', order: 1},
      {key: 'Britan', label: '巴西', order: 1},
      {key: 'France', label: '法国', order: 1},
      {key: 'Switzerland', label: '瑞士', order: 1},
      {key: 'Australia', label: '澳大利亚', order: 1},
      {key: 'Newzland', label: '新西兰', order: 1},
      {key: 'Canada', label: '加拿大', order: 1},
      {key: 'Austria', label: '奥地利', order: 1},
      {key: 'Korea', label: '韩国', order: 1},
      {key: 'Janpan', label: '日本', order: 1},
      {key: 'Germany', label: '德国', order: 1},
      {key: 'Italy', label: '意大利', order: 1},
      {key: 'Spain', label: '西班牙', order: 1},
      {key: 'Russia', label: '俄罗斯', order: 1},
      {key: 'Thailand', label: '泰国', order: 1},
      {key: 'India', label: '印度', order: 1},
      {key: 'Holland', label: '荷兰', order: 1},
      {key: 'Singapore', label: '新加坡', order: 1},
      {key: 'Europe', label: '欧洲其他', order: 1},
      {key: 'North America', label: '北美其他', order: 1},
      {key: 'South America', label: '南美其他', order: 1},
      {key: 'Asia', label: '亚洲其他', order: 1},
      {key: 'Africa', label: '非洲', order: 1},
      {key: 'Oceania', label: '大洋洲其他', order: 1}
    ]
  };
  return Location;
})
//FormError
.constant('FormError', {
  "ichance": {
    "gpa": "GPA分数: 请填写0-4之间的数字，可以取一位小数如3.4",
    "sat": "SAT成绩: 请填写600-2400之间的整数",
    "toefl": "托福成绩: 请填写0-120之间的整数",
    "ielts": "雅思成绩: 请填写0-9之间的数字，可以取整数分或者半分(如6.5)",
    "act": "ACT成绩: 请填写0-36之间的整数",
    "gre_quantitive": "GRE数学成绩: 请填写130-170之间的整数",
    "gre_verbal": "GRE词汇成绩: 请填写130-170之间的整数",
    "gre_analytical_writing": "GRE写作成绩: 请填写0-6之间的数字，可以取整数分或者半分(如5.5)",
    "gmat": "GMAT成绩: 请填写200-800之间的整数"
  }
})
