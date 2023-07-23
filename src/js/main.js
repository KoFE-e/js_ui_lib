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

window.addEventListener('DOMContentLoaded', () => {
    $('#example2').createCarousel({
        dots: true,
        arrows: false,
        count: 4,
        content: [
            "https://www.flixwatch.co/wp-content/uploads/80238012.jpg.webp",
            "https://www.pinkvilla.com/images/2023-06/1611187259_black-clover-sword-of-the-wizard-king.jpg",
            "https://m.economictimes.com/thumb/msid-100947486,width-1200,height-628,resizemode-4,imgsize-110074/black-clover-chapter-362-see-release-date-and-time.jpg",
            "https://www.pinkvilla.com/images/2023-06/1611187259_black-clover-sword-of-the-wizard-king.jpg"
        ]
    });
});
