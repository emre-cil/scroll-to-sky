import { useEffect, useState, useRef } from 'react';
const App = () => {
  const [scrolling, setScrolling] = useState(false);
  const circleRef = useRef<any>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const scrollTop = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollTop / height;
      console.log(scrollPercent);
      const radius = circleRef.current.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - scrollPercent * circumference;
      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      circleRef.current.style.strokeDashoffset = offset;
      setScrolling(scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className="scroll-top-wrapper"
        style={{
          opacity: scrolling ? 1 : 0,
          pointerEvents: scrolling ? 'auto' : 'none',
        }}
        onClick={scrollToTop}
      >
        <div className="scroll-top-box">
          <svg className="radial-progress" viewBox="0 0 50 50">
            <circle className="radial-progress-circle" ref={circleRef} cx="25" cy="25" r="20" />
          </svg>
          <svg
            className="scroll-top-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#444444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>{' '}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero, aliquam qui odio consectetur
        repellendus dolores itaque amet illum rem facilis explicabo neque dignissimos quam, accusamus praesentium
        exercitationem provident, est eaque placeat minima ullam optio voluptatem aliquid! Harum quam odio aspernatur
        commodi iure quia eaque, in tempora inventore blanditiis ex quos aut officia ea perspiciatis assumenda rem
        delectus accusantium, unde enim. Modi distinctio nesciunt commodi, odit voluptas repellendus quos eum tempora
        quis, dolor libero unde eius! Ab magnam deleniti eius id architecto sint blanditiis aliquam, sed, officia
        aspernatur eveniet. Labore non, doloremque ipsum modi expedita cum mollitia magnam autem totam!
      </div>
    </>
  );
};

export default App;
