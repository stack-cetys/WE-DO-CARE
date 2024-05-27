import { createBoard } from '@wixc3/react-board';
import { Background } from '../../../components/background/background';

export default createBoard({
    name: 'Background',
    Board: () => <Background />,
    isSnippet: true,
});