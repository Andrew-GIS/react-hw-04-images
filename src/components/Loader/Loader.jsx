import { ThreeCircles } from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
	return (
		<div className={styles.Conteiner}>
			<ThreeCircles
				display="flex"
				margin="50px"
				className=""
				height="300"
				width="300"
				color="#4fa94d"
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				ariaLabel="three-circles-rotating"
				outerCircleColor="green"
				innerCircleColor="red"
				middleCircleColor="yellow"
				/>
		</div>
	)
}

export default Loader;