//es6导出方式1

function mapFilter() {
    return  console.log("1111111111");
}

function mapState() {
    return console.log("222222222");
}
var obj = {
    mapFilter,
    mapState
}
export default obj