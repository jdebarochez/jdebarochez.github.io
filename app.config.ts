export default defineAppConfig({
  alpine: {
    title: 'Jean',
    description: 'The minimalist blog theme',
    image: {
      src: '/profile.jpeg',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300,
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/profile.jpeg', // path of the logo
        pathDark: '/profile.jpeg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Me.', // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine', // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on', // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'jdebarochez',
      mastodon: {
        icon: 'simple-icons:mastodon',
        label: 'mastodon',
        href: 'https://mastodon.social/@jdebarochez',
        rel: 'me',
      },
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/jdebarochez',
      },
    },
    form: {
      successMessage: 'Message sent. Thank you!',
    },
  },
})
