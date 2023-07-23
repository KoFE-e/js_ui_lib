import './lib/lib';

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae sint, praesentium excepturi obcaecati magnam quasi consequuntur tenetur architecto doloremque omnis minima eaque ipsa quae repellat doloribus exercitationem quis dolor?'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Data saved');
                }
            ],
            [
                'Another button',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('hello');
                }
            ]
        ]
    }
}));