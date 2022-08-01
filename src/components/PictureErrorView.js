import errorImage from '../services/sad_cat.jpg';

function PictureFallbackView() {
	return (
		<div>
			<img src={errorImage} width="240" alt="sadcat"/>
		</div>
	);
}

export default PictureFallbackView;