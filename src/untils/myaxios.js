// 封装文件与axios相关的配置
import axios from 'axios'
// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 暴露
export default axios
