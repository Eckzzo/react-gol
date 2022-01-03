import { globalStyles } from "styles/stitches";

import { Board } from "components/molecules/Board/Board.component";
import { Controls } from "components/molecules/Controls/Controls.component";
import { Container } from "components/atoms/Container/Container.component";

function App() {
	globalStyles();
	return (
		<Container>
			<Board />
			<Controls />
		</Container>
	);
}

export default App;
