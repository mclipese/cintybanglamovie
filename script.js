document.addEventListener('DOMContentLoaded', function() {
    const videoList = document.getElementById('video-list');

    // Array of video filenames and their corresponding titles and descriptions
    const videos = [
        {
            title: 'দৃশ্য 1: নদীর পাড়ে রাজ্জাক-কবরীর রোমান্টিক মিষ্টি দুষ্টুমি',
            actors: {
                'রাজ্জাক': 'বেন',
                'কবরী': 'এনা আপু'
            },
            filename: 'scene_1_Rui-Katla-Ilish.mp4'
        },
        {
            title: 'দৃশ্য 2: পরিবার, প্রতিবেশী এবং জসিম-ববিতার প্রেমের বন্ধন',
            actors: {
                'আলমগির - শাবানা': 'মাসুদ ভাই এর পরিবার',
                'রাজ্জাক - কবরী': 'নাহরিন আপুর পরিবার',
                'জসীম': 'শামিম [আলমগীরের ছোট ভাই]',
                'ববিতা': 'মারুফা [কবরীর ছোট বোন]'
            },
            filename: 'scene_2_Chupi-Chupi-Bolo.mp4'
        },
        {
            title: 'দৃশ্য 3: ন্যায়বিচারের জন্য নায়ক জসীমের লড়াই',
            actors: {
                'জমিদার': 'তৌফিক ভাই',
                'জসীম': 'জাহান ভাই',
                'জসীমের বন্ধুরা:': 'তাজিম / পলাশ / ওয়াকিফ / বেন'
            },
            filename: 'scene_3_Dekhle-Kemon-khel.mp4'
        },
        {
            title: 'দৃশ্য 4.1: গ্রামীণ ঈদ উদযাপন / Background music',
            actors: {
                'পরিবার ১:': 'ইফতি ভাইয়ের পরিবার বাবা মা সহ',
                'পরিবার ২': 'সাজিয়া আপুর পরিবার ছেলে মেয়ে সহ',
                'অন্যান্য': 'গ্রামবাসী',
            },
            filename: 'scene_4.1_o_mor_romjaner_oi_rojar_seshe.mp4'
        },
        {
            title: 'দৃশ্য 4.2: গ্রামীণ ঈদ উদযাপন',
            actors: {
                'পরিবার ১:': 'ইফতি ভাইয়ের পরিবার বাবা মা সহ',
                'পরিবার ২': 'সাজিয়া আপুর পরিবার ছেলে মেয়ে সহ',
                'অন্যান্য': 'গ্রামবাসী',
            },
            filename: 'scene_4.2_EID_MUBARAK_Song_Shakib_Khan.mp4'
        },
        {
            title: 'দৃশ্য 5.1: জসীম-ববিতার গায়ে হলুদ',
            actors: {
                'গায়ে হলুদ': 'সুমাইয়া ভাবী ও ৩-৪ বান্ধবী',
                'সাইড': 'কম বয়সী ছেলে মেয়ে'
            },
            filename: 'scene_5.1_Gaye_Holud_Malka_Banur_Dehse.mp4'
        },
        {
            title: 'দৃশ্য 5.2: জসীম-ববিতার বিবাহ অনুষ্ঠান',
            actors: {
                'জামাই- বউ': 'জাহান ভাই এবং শিখা আপু',
                'সাইড': 'কম বয়সী ছেলে মেয়ে'
            },
            filename: 'scene_5.2_Biye_Asbo_Barat_Niye.mp4'
        },
        {
            title: 'দৃশ্য 6.1: জীবীকার জন্যে জসীম-ববিতার ঢাকা গমন| ঢাকার দৃশ্য ও জীবনের বৈপরীত্য',
            actors: {
                'ঢাকার পোলা ভেরি ভেরি স্মার্ট': 'শামীম AJ + রিমা ভাই + ২জন '
            },
            filename: 'scene_6.1_Dhakar-Pola.mp4'
        },
        {
            title: 'দৃশ্য 6.2: জীবীকার জন্যে জসীম-ববিতার ঢাকা গমন| ঢাকার দৃশ্য ও জীবনের বৈপরীত্য',
            actors: {
                'ঢাকা শহর আইসা আমার': 'প্রীতম ও সঙ্গীতা'
            },
            filename: 'scene_6.2_Dhaka-Shohor-Aisha-Amar.mp4'
        },
        {
            title: 'দৃশ্য 7.1: জসীম-ববিতার তিন দশকের রোম্যান্স| ৭০-৮০ দশক ',
            actors: {
                '৭০-৮০ দশকের জুটি': 'রিপা আপু ও রিমা আপু',
            },
            filename: 'scene_7.1_70-80s-Ghomta-Diya-Cholre-Maiya.mp4'
        },
        {
            title: 'দৃশ্য 7.2: জসীম-ববিতার তিন দশকের রোম্যান্স| ৯০ দশক ',
            actors: {
                '৯০ দশকের জুটি': 'রত্না আপু(শাবানা) ও ফাহিম ভাই(আলমগির)',
            },
            filename: 'scene_7.2_90s-Ki-Dia-Mon-Karila.mp4'
        },
        {
            title: 'দৃশ্য 7.3: জসীম-ববিতার তিন দশকের রোম্যান্স| বর্তমান',
            actors: {
                'বর্তমান সময়ের জুটি': 'পঙ্কজ ভাই ও রচনা আপু',
            },
            filename: 'scene_7.3_present_Cholo-Niralai.mp4'
        },
        {
            title: 'দৃশ্য 8: বিয়ের ত্রিশ বছর পর অভিমান এবং মিলে যাওয়া',
            actors: {
                'জুটি': 'তৌফিক ভাই ও জাহানারা আপু',
            },
            filename: 'scene_8_e-khacha-vangbo-ami-kemon-kore.mp4'
        },
        {
            title: 'দৃশ্য ৯: পহেলা বৈশাখ উদযাপন ',
            actors: {
                'শিল্পী': 'সকল পারফর্মার রা একে একে স্টেজে প্রবেশ করবে|',
                'নৃত্য (বাঁয়ে)': 'তানিশা',
                'নৃত্য (মাঝে)': 'সুমাইয়া ভাবী',
                'নৃত্য (ডানে)': 'TBD',
            },
            filename: 'scene_9_ailo-ailo-re-ronge-vara-boishakh.mp4'
        },
    ];

    // Loop through the videos array and create HTML for each video
    videos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');

        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.src = `videos/${video.filename}`;

        const titleElement = document.createElement('h2');
        titleElement.textContent = video.title;

        const descriptionElement = document.createElement('h4');
        descriptionElement.textContent = "অভিনয়ে: ";

        const list = document.createElement('ul');

        // Loop through the key-value array
        for (const key in video.actors) {
            const listItem = document.createElement('li');
            listItem.innerHTML = '<b>' + key + '</b>: ' + video.actors[key];
            list.appendChild(listItem);
        }

        const actorsElement = document.createElement('p');
        actorsElement.appendChild(list);

        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(titleElement);
        videoContainer.appendChild(descriptionElement);
        videoContainer.appendChild(actorsElement);

        videoList.appendChild(videoContainer);
    });
});
