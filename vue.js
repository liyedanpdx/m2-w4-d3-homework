var vm1 = new Vue({
    el: '#container',
    components: {
        'photos':{
            template: '<img src="images/chili.jpg" alt="White Chicken Chili" width="180">'
        },
        'comment':{
            template:'<h2>Comments</h2>'
        }
    },
    data: {
        posts: [
            {
                author: "Brianna",
                date: "February 18, 2021 @ 3:30 pm",
                reply: "REPLY",
                text: "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
                imageSrc: 'images/profile.png',
                level: 'Novice',
                bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!'
            },
            {
                author: "LINH",
                date: "February 15, 2021 @ 9:46 am",
                reply: "REPLY",
                text: "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!",
                imageSrc: 'images/profile.png',
                level: 'Newcomer',
                bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
            },
            {
                author: "CATHERINE LEONARDO",
                date: "February 13, 2021 @ 12:58 pm",
                reply: "REPLY",
                text: "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
                imageSrc: 'images/profile.png',
                level: 'Mentor',
                bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!'
            },
            {
                author: "KALI",
                date: "February 13, 2021 @ 11:31 am",
                reply: "REPLY",
                text: "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
                imageSrc: 'images/profile.png',
                level: 'Novice',
                bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
            }
        ],
        showFloatingBox: false,
        selectedAuthor: {
            name: '',
            level: '',
            bio: ''
        }
    },
    methods: {
        showAuthorInfo(author) {
            this.selectedAuthor.name = author.author;
            this.selectedAuthor.level = author.level;
            this.selectedAuthor.bio = author.bio;
            this.showFloatingBox = true;
        },
        closeFloatingBox() {
            this.showFloatingBox = false;
        }
    }
});