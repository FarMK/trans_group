new Vue({
    el: '.wrapper',
    data: {
        burgerActive: false,
        block_1: false,
        block_2: false,
        block_3: false,
        block_4: false,
        block_5: false,
        block_6: false,
        img_show_1: false,
        img_show_2: false,
        img_show_3: false,
        img_show_4: false,
        img_show_5: false,
        img_show_6: false,
        img_closer_show: false,

    },
    methods: {
        burger_activate: function() {
            this.burgerActive = !this.burgerActive
        },

        block_1_activate: function() {
            if (this.block_2 = true) {
                this.block_2 = false;
            }
            if (this.block_3 = true) {
                this.block_3 = false;
            }
            if (this.block_4 = true) {
                this.block_4 = false;
            }
            if (this.block_5 = true) {
                this.block_5 = false;
            }
            if (this.block_6 = true) {
                this.block_6 = false;
            }
            this.block_1 = !this.block_1

        },

        block_2_activate: function() {
            if (this.block_1 = true) {
                this.block_1 = false;
            }
            if (this.block_3 = true) {
                this.block_3 = false;
            }
            if (this.block_4 = true) {
                this.block_4 = false;
            }
            if (this.block_5 = true) {
                this.block_5 = false;
            }
            if (this.block_6 = true) {
                this.block_6 = false;
            }

            this.block_2 = !this.block_2

        },

        block_3_activate: function() {
            if (this.block_1 = true) {
                this.block_1 = false;
            }
            if (this.block_2 = true) {
                this.block_2 = false;
            }
            if (this.block_4 = true) {
                this.block_4 = false;
            }
            if (this.block_5 = true) {
                this.block_5 = false;
            }
            if (this.block_6 = true) {
                this.block_6 = false;
            }

            this.block_3 = !this.block_3
        },


        block_4_activate: function() {
            if (this.block_1 = true) {
                this.block_1 = false;
            }
            if (this.block_2 = true) {
                this.block_2 = false;
            }
            if (this.block_3 = true) {
                this.block_3 = false;
            }

            if (this.block_5 = true) {
                this.block_5 = false;
            }
            if (this.block_6 = true) {
                this.block_6 = false;
            }

            this.block_4 = !this.block_4
        },

        block_5_activate: function() {
            if (this.block_1 = true) {
                this.block_1 = false;
            }
            if (this.block_2 = true) {
                this.block_2 = false;
            }
            if (this.block_3 = true) {
                this.block_3 = false;
            }

            if (this.block_4 = true) {
                this.block_4 = false;
            }
            if (this.block_6 = true) {
                this.block_6 = false;
            }
            this.block_5 = !this.block_5
        },
        block_6_activate: function() {
            if (this.block_1 = true) {
                this.block_1 = false;
            }
            if (this.block_2 = true) {
                this.block_2 = false;
            }
            if (this.block_3 = true) {
                this.block_3 = false;
            }

            if (this.block_5 = true) {
                this.block_5 = false;
            }
            if (this.block_4 = true) {
                this.block_4 = false;
            }
            this.block_6 = !this.block_6
        },

        canceler: function() {
            this.block_1 = false;
            this.block_2 = false;
            this.block_3 = false;
            this.block_4 = false;
            this.block_5 = false;
            this.block_6 = false;

        },


        full_img_1: function() {
            this.img_show_1 = true;
            this.img_closer_show = true;
        },

        full_img_2: function() {
            this.img_show_2 = true;
            this.img_closer_show = true;
        },

        full_img_3: function() {
            this.img_show_3 = true;
            this.img_closer_show = true;
        },
        full_img_4: function() {
            this.img_show_4 = true;
            this.img_closer_show = true;
        },
        full_img_5: function() {
            this.img_show_5 = true;
            this.img_closer_show = true;
        },
        full_img_6: function() {
            this.img_show_6 = true;
            this.img_closer_show = true;
        },
        full_img_7: function() {
            this.img_show_7 = true;
            this.img_closer_show = true;
        },
        full_img_8: function() {
            this.img_show_8 = true;
            this.img_closer_show = true;
        },
        full_img_9: function() {
            this.img_show_9 = true;
            this.img_closer_show = true;
        },


        full_img_closer: function() {
            this.img_show_1 = false;
            this.img_show_2 = false;
            this.img_show_3 = false;
            this.img_show_4 = false;
            this.img_show_5 = false;
            this.img_show_6 = false;
            this.img_show_7 = false;
            this.img_show_8 = false;
            this.img_show_9 = false;
            this.img_closer_show = false;
        }





    },
})