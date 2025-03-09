import { useState } from 'react';
import ulikeImage from '../assets/ulike.svg';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="flex items-center justify-between gap-2">
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
        <button
          style={{
            cursor: 'pointer',
            fontWeight: '500',
            padding: '1rem 1.5rem',
            borderRadius: '9999px',
            transition: 'all 0.2s linear', // This will animate all properties, including transform
            background: isHovered
              ? 'transparent'
              : 'linear-gradient(180deg,#FF573F,#FF806E)',
            color: isHovered ? '#fd7e14' : '#ffffff',
            border: isHovered ? '2px solid #fd7e14' : '2px solid transparent',
            transform: isHovered ? 'scale(0.90)' : 'scale(1)', // Scales down to 95% when hovered
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="lg:py-4 lg:px-6 lg:text-base md:py-3 md:px-3 md:text-sm sm:py-2 sm:px-2 mt-10"
        >
          احصل علي استشارة مجانية
        </button>
      </div>
      <div className="flex-1">
        <img src={ulikeImage} alt="Logo" />
      </div>
    </section>
  );
};
