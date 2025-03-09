import ulikeImage from '../assets/ulike.svg';

export const Hero = () => {
  return (
    <section className="w-5/6 mx-auto flex items-center justify-between gap-2 min-h-[110vh]">
      <div className="flex-1 flex flex-col items-start">
        <h1 className="text-dark text-[52px] font-medium leading-14">
          تطوير أعمالك يبدأ
          <br />
          <span className="text-[#553BB5]">بخطوة</span>.
        </h1>
        <div className="relative flex items-center mt-4">
          <ion-icon
            size="large"
            style={{
              color: '#553BB5',
            }}
            name="caret-back-outline"
            className="absolute top-0 right-0" // Positioned to the right of the text start
          ></ion-icon>
          <p className="text-[#5e5d5d] text-xl leading-8 pr-6">
            {' '}
            {/* Added padding-right to avoid overlap */}
            نساعدك على نمو أعمالك عبر تفعيل حسابات التواصل
            <br />
            الاجتماعي بالشكل الأمثل
          </p>
        </div>
      </div>
      <div className="flex-1">
        <img src={ulikeImage} alt="Logo" />
      </div>
    </section>
  );
};
