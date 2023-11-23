const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',
  heading2:
    'font-inter font-semibold xs:text-[50px] mt-[20px] text-[20px] text-white xs:leading-[60.8px] leading-[66.8px] w-full',
  heading7:
    'font-inter font-semibold xs:text-[50px] mt-[10px] text-[20px] text-secondary xs:leading-[60.8px] leading-[66.8px] w-full',
  heading6:
    'font-inter font-semibold xs:text-[50px] mt-[10px] text-[20px] text-white xs:leading-tight leading-tight w-full',
  heading8:
    'font-inter font-semibold xs:text-[50px] mt-[10px] text-[20px] text-white xs:leading-[60.8px] leading-[66.8px] w-full',
  heading3:
    'font-inter font-semibold xs:text-[40px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full',
  heading4:
    'font-inter font-semibold xs:text-[30px] mt-[20px] text-[28px] text-black2 xs:leading-[60.8px] leading-[66.8px] w-full',
  heading5:
    'font-inter font-semibold xs:text-[20px] mt-[20px] text-[16px] text-black2 xs:leading-[60.8px] leading-[66.8px] w-full',
  paragraph:
    'font-inter font-normal text-dimWhite text-[18px] leading-[25.8px]',
  paragraph2:
    'font-inter font-normal text-background text-[14px] leading-[25.8px]',
  paragraph3: 'font-inter font-normal text-black2 text-[14px] leading-[30.8px]',
  paragraph4: 'font-inter font-normal text-black2 text-[14px] leading-[30.8px]',
  paragraph5:
    'font-inter font-normal text-background text-[14px] leading-[25.8px]',
  paragraph6:
    'font-inter font-normal text-secondary text-[14px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'md:px-16 px-6',
  paddingY: 'md:py-16 py-6',
  padding: 'md:px-16 px-6 md:py-12 py-4',

  marginX: 'md:mx-16 mx-6',
  marginY: 'md:my-16 my-6',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImgReverse1: `flex-1 flex ${styles.flexCenter} md:mr-32 mr-0 md:mt-0  relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
