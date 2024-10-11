export interface IMisson {
  image: string;
  title: string;
  des: string;
}

export const MissionVi: IMisson[] = [
  {
    image: 'assets/images/mission.svg',
    title: 'Sứ mệnh',
    des: '<p>Nâng tầm chất lượng cuộc sống <br> bằng những ứng dụng thông minh, đơn giản, hiệu quả</p>',
  },
  {
    image: 'assets/images/mission.svg',
    title: 'Tầm nhìn',
    des: '<p>Trở thành tập đoàn công nghệ hàng đầu Việt Nam và vươn mình ra thế giới. <br> Phát triển mạnh mẽ không chỉ trong lĩnh vực ứng dụng mà còn tham gia vào nhiều lĩnh vực khác như giải trí, kinh doanh</p>',
  },
];

export const MissionEn: IMisson[] = [
  {
    image: 'assets/images/mission.svg',
    title: 'Mission',
    des: '<p>Elevating the quality of life through smart, simple, and effective solutions.',
  },
  {
    image: 'assets/images/mission.svg',
    title: '',
    des: "<p>To become Vietnam's leading technology corporation and expand globally. <br> We aim for strong growth not only in the field of applications but also in diverse sectors such as entertainment and business.</p>",
  },
];
