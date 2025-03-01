      let currentPosition = 0;
      const imageWidth = 300; // ปรับขนาดตามความกว้างของภาพ
      const imageList = document.querySelector('#banner ul');
      const slides = document.querySelectorAll('.slide');

      function nextImage() {
        currentPosition -= imageWidth;

        //  เลื่อน  ul  ไปทางซ้าย  
        imageList.style.left = currentPosition + 'px';

        //  อัพเดท  class  active  
        updateActiveSlide();

        //  ตรวจสอบตำแหน่ง  ul  
        if (currentPosition < -(imageWidth * (imageList.children.length - 1))) {
          //  รีเซ็ตตำแหน่ง  ul  
          currentPosition = 0;
          imageList.style.transition = 'none'; //  ปิด  transition  ชั่วคราว  
          imageList.style.left = currentPosition + 'px';

          //  เปิด  transition  กลับมา  
          setTimeout(() => {
            imageList.style.transition = 'left 0.5s ease-in-out';
          }, 0);
        }
      }

      function prevImage() {
        currentPosition += imageWidth;

        //  เลื่อน  ul  ไปทางขวา  
        imageList.style.left = currentPosition + 'px';

        //  อัพเดท  class  active  
        updateActiveSlide();

        //  ตรวจสอบตำแหน่ง  ul  
        if (currentPosition > 0) {
          //  รีเซ็ตตำแหน่ง  ul  
          currentPosition = -(imageWidth * (imageList.children.length - 3));
          imageList.style.transition = 'none'; //  ปิด  transition  ชั่วคราว  
          imageList.style.left = currentPosition + 'px';

          //  เปิด  transition  กลับมา  
          setTimeout(() => {
            imageList.style.transition = 'left 0.5s ease-in-out';
          }, 0);
        }
      }

      function updateActiveSlide() {
        //  คำนวณ  index  ของรูปที่  active  
        const activeIndex = Math.abs(currentPosition / imageWidth) + 1;

        //  ลบ  class  active  ออกจากทุกรูป  
        slides.forEach(slide => slide.classList.remove('active'));

        //  เพิ่ม  class  active  ให้กับรูปที่  active  
        slides[activeIndex].classList.add('active');
      }
