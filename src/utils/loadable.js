
import Loadable from 'react-loadable';
import dynamic from 'umi/dynamic'
//通用的过场组件
const loadingComponent = () => {
    return (
        <div>loading</div>
    )
}


export default (loader, loading = loadingComponent) => {
    return  dynamic({
        loader,
        loading
    })
}





//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
// export default (loader, loading = loadingComponent) => {
//     return Loadable({
//         loader,
//         loading
//     });
// }