import dynamic from 'next/dynamic';

const Smart = (props) => {
  const {blockName,attrs } = props;
  const [namespace, block] = blockName.split('/');
  
  const Component = dynamic(() => import(`./${namespace}/${block}`), {
      ssr: false,
      loading: () => <p>loading</p>
  });
    
  return (Component ? 
      <Component {...attrs} /> : null
  )

}






const Parser = ({obj}) => {
 const {title, has_blocks,blocks} = obj
 return  (
  <div>
  <h1>{title && title.rendered}</h1>
  {has_blocks && blocks.map((props,i)=> <Smart  key={i}  {...props}/>)}
  </div>
)
}

export default Parser
