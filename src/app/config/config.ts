class Gamepad {
    id: string; position: string[]; text: string; status: boolean;
}
export const gamepads1: Gamepad[] = [
    { id: '0', position: ['0', '0'], text: '', status: false, },
    { id: '1', position: ['0', '1'], text: '', status: false, },
    { id: '2', position: ['0', '2'], text: '', status: false, },
    { id: '3', position: ['1', '0'], text: '', status: false, },
    { id: '4', position: ['1', '1'], text: '', status: false, },
    { id: '5', position: ['1', '2'], text: '', status: false, },
    { id: '6', position: ['2', '0'], text: '', status: false, },
    { id: '7', position: ['2', '1'], text: '', status: false, },
    { id: '8', position: ['2', '2'], text: '', status: false, }
];
// class Textbox {
//     text: string;
// }
// export const textbox: Textbox[] = [
//     { text: 'Player1 click a box', },
//     { text: 'Player2 click a box', },
//     { text: 'Player1 wins', },
//     { text: 'Player2 wins', },
//     { text: 'Tie', }
// ];
class Textbox {
    static create(event: { text: string; }) {
        return { text: event.text };
    }
}
export const textbox = Textbox.create({
    text: '',
});

