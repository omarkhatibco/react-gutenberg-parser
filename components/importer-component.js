import dynamic from 'next/dynamic';

const ImporterComponent = (props) => {
  const {blockName,attrs } = props;
  const [namespace, block] = blockName.split('/');
  
  const Component = dynamic(() => import(`./${namespace}/${block}`).catch(err => null), {
      ssr: false,
      loading: () => <p>loading</p>
  });
    console.log(Component)
  return <Component {...attrs} />
}

export default ImporterComponent;


