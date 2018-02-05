(function () {

    var app = angular.module('store', [])
        .controller('StoreController', function ($scope) {
            this.products = gems;
        })

        .controller('PanelController', function ($scope) {
            this.tab = 1;

            this.selectTab = function(setTab) {
                this.tab = setTab;
            };

            this.isSelected = function(checkTab) {
                return this.tab === checkTab;
            }
        });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'This thing is a beaut!',
            specification: 'It is the perfect size of 5"',
            review: 'I bought this for my woman',
            canPurchase: true,
            images: [
                {
                    full: './images/diamond.jpg',
                    thumb: 'images/diamond thumb.jpg'
                },
                {
                    full: './images/sapphire.jpg',
                    thumb: './images/sapphire thumb.jpg'
                }
            ]
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "This one is better than the first one!",
            specification: 'The size of the is 2"',
            review: 'My daughter has a beautiful one!',
            canPurchase: true,
            images: [
                {
                    full: './images/sapphire.jpg',
                    thumb: './images/sapphire thumb.jpg'
                }
            ]
        }
    ]
})();


