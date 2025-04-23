const base = {
    get() {
        return {
            url : "http://localhost:8080/minsuyudingguanlixitong/",
            name: "minsuyudingguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/minsuyudingguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "民宿预订管理系统"
        } 
    }
}
export default base
