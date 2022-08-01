// 循环遍历引入项
// 引入vant
import { Icon,Swipe,SwipeItem,Search,Button,Popup,Overlay,ConfigProvider,Cell,Checkbox,CheckboxGroup,Field, CellGroup,Toast,Progress,Dialog} from 'vant';

const plugins = [
    Icon,Swipe,SwipeItem,Search,Button,Popup,Overlay,ConfigProvider,Cell,Checkbox,CheckboxGroup,Field, CellGroup,Toast,Progress,Dialog
]
// 获取app参数即可
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item) // 返回app.use
    })
}