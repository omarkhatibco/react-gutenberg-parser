import ImporterComponent from './importer-component'

const Parser = ({obj}) => {
 const {title, has_blocks,blocks} = obj
 return  (
  <div>
  <h1>{title && title.rendered}</h1>
  {has_blocks && blocks.map((props,i)=> <ImporterComponent  key={i}  {...props}/>)}
  </div>
)
}

export default Parser
