import {Component} from "react";
import TopBar from "components/home/bars/TopBar";
import BottomBar from "components/home/bars/BottomBar";
import Form from "components/convention/Form";

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
