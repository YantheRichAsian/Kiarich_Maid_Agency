export const SITE = {
  name: 'Kiarich Maid Agency',
  legalName: 'Agensi Pekerjaan Kiarich Sdn Bhd',
  phoneDisplay: '06-954 2058 / 012-666 2058',
  phoneHref: 'tel:60126060315',
  whatsappNumber: '60126060315',
  whatsappHref: 'https://wa.me/60126060315',
  addressLine1: '27, Jalan Perniagaan,',
  addressLine2: "Pusat Perniagaan Kenanga,",
  addressLine3: "84000 Muar, Johor Darul Ta'zim, Malaysia",
  social: {
    facebook: 'https://www.facebook.com/share/15oobmkbDz/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/kiarichmaid?igsh=MWdnZTZyYTQwYmR2',
    tiktok: 'https://www.tiktok.com/@kiarich.maid.agency',
    xiaohongshu: 'https://xhslink.com/m/EgwGMCsgHL',
    youtube: 'https://youtube.com/@kiarichmaidagency?si=qGGBiqg3Lc1uxbJR',
  },
  stats: {
    years: '20+',
    maid: '5000+',
    family: '5000+',
    corporate: '5000+',
  },
};

export function whatsappLink(message: string) {
  return `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}
