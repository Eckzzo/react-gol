import { globalStyles } from "styles/stitches";

import { Board } from "components/molecules/Board/Board.component";
import { Play } from "components/atoms/Play/Play.component";
import { Controls } from "components/molecules/Controls/Controls.component";

function App() {
	globalStyles();
	return (
		<>
			<Board></Board>
			<Controls>
				<Play />
			</Controls>
		</>
	);
}

export default App;
