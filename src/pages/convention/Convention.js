import {Component} from "react";
import TopBar from "components/bars/TopBar";
import BottomBar from "components/bars/BottomBar";
import Form from "pages/convention/Form";

class Convention extends Component {

	render() {
		return (
			<div className="tc_App">
				<TopBar/>
				<Form />
				<BottomBar/>
			</div>
		);
	}
}

export default Convention;
