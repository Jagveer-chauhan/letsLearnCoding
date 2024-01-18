import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleChevronRight,
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 font-Poppins text-neutral-50 px-10 pt-10">
        <div className="px-10 py-24 flex flex-col">
          <span className="p-2 text-4xl font-semibold ">
            Purchase your awesome lessons and find your tutors
          </span>
          <span className="p-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
            eget aliquet.
          </span>
          <span className="flex flex-row justify-start gap-10 py-6">
            <Link className="block px-6 py-2 rounded-md bg-btn-bg" href={"#"}>
              Book Lessions
            </Link>
            <Link className="block px-6 py-2 rounded-md bg-btn-bg" href={"#"}>
              Find Tutor
            </Link>
          </span>
        </div>
        <div className="">
          <Image
            src="/images/aboutUsMain.png"
            width={490}
            height={570}
            alt="image"
          ></Image>
        </div>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-20 py-6">
        <div className="">
          <Image
            src="/images/aboutUsModel.png"
            width={380}
            height={420}
            alt="image"
          ></Image>
        </div>
        <div className="flex flex-col justify-start gap-5 pe-14">
          <span className="text-4xl font-semibold font-Poppins text-neutral-50">
            What Will You Get?
          </span>
          <span className="text-sm font-Poppins text-neutral-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
            eget aliquet:
          </span>
          <div>
            <span className="py-2 bg-neutral-50 rounded-xl flex  flex-row">
              <span className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M35.4035 4.33301C42.7485 4.33301 47.6668 9.48968 47.6668 17.1597V34.8635C47.6668 42.5097 42.7485 47.6663 35.4035 47.6663H16.6185C9.2735 47.6663 4.3335 42.5097 4.3335 34.8635V17.1597C4.3335 9.48968 9.2735 4.33301 16.6185 4.33301H35.4035ZM35.0568 19.4997C34.3202 18.763 33.1068 18.763 32.3702 19.4997L23.4218 28.448L19.6302 24.6563C18.8935 23.9197 17.6802 23.9197 16.9435 24.6563C16.2068 25.393 16.2068 26.5847 16.9435 27.343L22.1002 32.478C22.4685 32.8463 22.9452 33.0197 23.4218 33.0197C23.9202 33.0197 24.3968 32.8463 24.7652 32.478L35.0568 22.1863C35.7935 21.4497 35.7935 20.258 35.0568 19.4997Z"
                    fill="#5035F1"
                  />
                </svg>
              </span>
              <span className="p-1">
                <p className="text-sm font-medium">
                  1-on-1 lessons in more than 150 languages
                </p>
                <ul className="py-2 px-4 list-disc">
                  <li className="text-xs">
                    Learn from certified teachers with proven experience... read
                    more
                  </li>
                </ul>
              </span>
            </span>
          </div>
          <div>
            <span className="py-2 bg-neutral-50 rounded-xl flex  flex-row">
              <span className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M35.4035 4.33301C42.7485 4.33301 47.6668 9.48968 47.6668 17.1597V34.8635C47.6668 42.5097 42.7485 47.6663 35.4035 47.6663H16.6185C9.2735 47.6663 4.3335 42.5097 4.3335 34.8635V17.1597C4.3335 9.48968 9.2735 4.33301 16.6185 4.33301H35.4035ZM35.0568 19.4997C34.3202 18.763 33.1068 18.763 32.3702 19.4997L23.4218 28.448L19.6302 24.6563C18.8935 23.9197 17.6802 23.9197 16.9435 24.6563C16.2068 25.393 16.2068 26.5847 16.9435 27.343L22.1002 32.478C22.4685 32.8463 22.9452 33.0197 23.4218 33.0197C23.9202 33.0197 24.3968 32.8463 24.7652 32.478L35.0568 22.1863C35.7935 21.4497 35.7935 20.258 35.0568 19.4997Z"
                    fill="#5035F1"
                  />
                </svg>
              </span>
              <span className="p-1">
                <p className="text-sm font-medium">
                  1-on-1 lessons in more than 150 languages
                </p>
                <ul className="py-2 px-4 list-disc">
                  <li className="text-xs">
                    Learn from certified teachers with proven experience... read
                    more
                  </li>
                </ul>
              </span>
            </span>
          </div>
          <div>
            <span className="py-2 bg-neutral-50 rounded-xl flex  flex-row">
              <span className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M35.4035 4.33301C42.7485 4.33301 47.6668 9.48968 47.6668 17.1597V34.8635C47.6668 42.5097 42.7485 47.6663 35.4035 47.6663H16.6185C9.2735 47.6663 4.3335 42.5097 4.3335 34.8635V17.1597C4.3335 9.48968 9.2735 4.33301 16.6185 4.33301H35.4035ZM35.0568 19.4997C34.3202 18.763 33.1068 18.763 32.3702 19.4997L23.4218 28.448L19.6302 24.6563C18.8935 23.9197 17.6802 23.9197 16.9435 24.6563C16.2068 25.393 16.2068 26.5847 16.9435 27.343L22.1002 32.478C22.4685 32.8463 22.9452 33.0197 23.4218 33.0197C23.9202 33.0197 24.3968 32.8463 24.7652 32.478L35.0568 22.1863C35.7935 21.4497 35.7935 20.258 35.0568 19.4997Z"
                    fill="#5035F1"
                  />
                </svg>
              </span>
              <span className="p-1">
                <p className="text-sm font-medium">
                  1-on-1 lessons in more than 150 languages
                </p>
                <ul className="py-2 px-4 list-disc">
                  <li className="text-xs">
                    Learn from certified teachers with proven experience... read
                    more
                  </li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-20 py-12">
        <div className="flex flex-col justify-start gap-5">
          <span className="text-4xl font-semibold font-Poppins text-neutral-50">
          Here’s how it <itex className="text-bg-blue">works</itex>
          </span>
          <span className="text-sm font-Poppins text-neutral-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
            eget aliquet:
          </span>
          <div>
            <span className="py-2 bg-neutral-50 rounded-xl flex  flex-row">
              <span className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M35.4035 4.33301C42.7485 4.33301 47.6668 9.48968 47.6668 17.1597V34.8635C47.6668 42.5097 42.7485 47.6663 35.4035 47.6663H16.6185C9.2735 47.6663 4.3335 42.5097 4.3335 34.8635V17.1597C4.3335 9.48968 9.2735 4.33301 16.6185 4.33301H35.4035ZM35.0568 19.4997C34.3202 18.763 33.1068 18.763 32.3702 19.4997L23.4218 28.448L19.6302 24.6563C18.8935 23.9197 17.6802 23.9197 16.9435 24.6563C16.2068 25.393 16.2068 26.5847 16.9435 27.343L22.1002 32.478C22.4685 32.8463 22.9452 33.0197 23.4218 33.0197C23.9202 33.0197 24.3968 32.8463 24.7652 32.478L35.0568 22.1863C35.7935 21.4497 35.7935 20.258 35.0568 19.4997Z"
                    fill="#5035F1"
                  />
                </svg>
              </span>
              <span className="p-1">
                <p className="text-sm font-medium">
                  1-on-1 lessons in more than 150 languages
                </p>
                <ul className="py-2 px-4 list-disc">
                  <li className="text-xs">
                    Learn from certified teachers with proven experience... read
                    more
                  </li>
                </ul>
              </span>
            </span>
          </div>
          <div>
            <span className="py-2 bg-neutral-50 rounded-xl flex  flex-row">
              <span className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M35.4035 4.33301C42.7485 4.33301 47.6668 9.48968 47.6668 17.1597V34.8635C47.6668 42.5097 42.7485 47.6663 35.4035 47.6663H16.6185C9.2735 47.6663 4.3335 42.5097 4.3335 34.8635V17.1597C4.3335 9.48968 9.2735 4.33301 16.6185 4.33301H35.4035ZM35.0568 19.4997C34.3202 18.763 33.1068 18.763 32.3702 19.4997L23.4218 28.448L19.6302 24.6563C18.8935 23.9197 17.6802 23.9197 16.9435 24.6563C16.2068 25.393 16.2068 26.5847 16.9435 27.343L22.1002 32.478C22.4685 32.8463 22.9452 33.0197 23.4218 33.0197C23.9202 33.0197 24.3968 32.8463 24.7652 32.478L35.0568 22.1863C35.7935 21.4497 35.7935 20.258 35.0568 19.4997Z"
                    fill="#5035F1"
                  />
                </svg>
              </span>
              <span className="p-1">
                <p className="text-sm font-medium">
                  1-on-1 lessons in more than 150 languages
                </p>
                <ul className="py-2 px-4 list-disc">
                  <li className="text-xs">
                    Learn from certified teachers with proven experience... read
                    more
                  </li>
                </ul>
              </span>
            </span>
          </div>
          <div>
            <span className="py-2 bg-neutral-50 rounded-xl flex  flex-row">
              <span className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M35.4035 4.33301C42.7485 4.33301 47.6668 9.48968 47.6668 17.1597V34.8635C47.6668 42.5097 42.7485 47.6663 35.4035 47.6663H16.6185C9.2735 47.6663 4.3335 42.5097 4.3335 34.8635V17.1597C4.3335 9.48968 9.2735 4.33301 16.6185 4.33301H35.4035ZM35.0568 19.4997C34.3202 18.763 33.1068 18.763 32.3702 19.4997L23.4218 28.448L19.6302 24.6563C18.8935 23.9197 17.6802 23.9197 16.9435 24.6563C16.2068 25.393 16.2068 26.5847 16.9435 27.343L22.1002 32.478C22.4685 32.8463 22.9452 33.0197 23.4218 33.0197C23.9202 33.0197 24.3968 32.8463 24.7652 32.478L35.0568 22.1863C35.7935 21.4497 35.7935 20.258 35.0568 19.4997Z"
                    fill="#5035F1"
                  />
                </svg>
              </span>
              <span className="p-1">
                <p className="text-sm font-medium">
                  1-on-1 lessons in more than 150 languages
                </p>
                <ul className="py-2 px-4 list-disc">
                  <li className="text-xs">
                    Learn from certified teachers with proven experience... read
                    more
                  </li>
                </ul>
              </span>
            </span>
          </div>
        </div>
        <div className="ps-10">
          <Image
            src="/images/aboutUsModel.png"
            width={380}
            height={420}
            alt="image"
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-20">
        <div className="flex flex-col gap-7">
          <p className="text-4xl text-bg-blue font-semibold">Edu Smart it&apos;s about mastering a timeless skill</p>
          <p className="text-sm text-neutral-300">cultivating new perspectives, and connecting with fascinating people from around the world.</p>
        </div>
        <div className="flex flex-col gap-4 px-12">
          <p className="absolute text-bg-blue text-6xl font-normal italic -mx-[68px] -my-8"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></p>
          <span className="flex gap-1">
            <i className="text-bg-blue text-sm"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
            <i className="text-bg-blue text-sm"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
            <i className="text-bg-blue text-sm"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
            <i className="text-bg-blue text-sm"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
            <i className="text-bg-blue text-sm"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
          </span>
          <p className="text-xs text-neutral-300 leading-7 pe-4">With Edu Smart, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students</p>
          <div className="flex flex-row gap-2">
            <span className="relative">
              <Image width={50} height={50} className="rounded-full border border-gray-100 shadow-sm" src="/images/aboutUsModel.png" alt="image"></Image>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-base font-semibold text-bg-blue">Jaquon Hart</p>
              <p className="text-sm font-normal text-neutral-300">Digital Marketing Executive, Hypebeast</p>
            </span>
            <i className="text-2xl text-bg-blue ps-10 pt-4"><FontAwesomeIcon icon={faCircleChevronRight}></FontAwesomeIcon></i>
          </div>
          <span className="flex flex-row gap-1">
            <i className="text-bg-blue"><FontAwesomeIcon icon={faCircle} height={7} width={7}></FontAwesomeIcon></i>
            <i className="text-neutral-50"><FontAwesomeIcon icon={faCircle} height={7} width={7}></FontAwesomeIcon></i>
            <i className="text-neutral-50"><FontAwesomeIcon icon={faCircle} height={7} width={7}></FontAwesomeIcon></i>
            <i className="text-neutral-50"><FontAwesomeIcon icon={faCircle} height={7} width={7}></FontAwesomeIcon></i>
            <i className="text-neutral-50"><FontAwesomeIcon icon={faCircle} height={7} width={7}></FontAwesomeIcon></i>
            <i className="text-neutral-50"><FontAwesomeIcon icon={faCircle} height={7} width={7}></FontAwesomeIcon></i>
          </span>
        </div>
      </div>
      <div className="py-8 px-20">
        <div className="bg-bg-blue flex flex-col justify-between md:flex-row md:gap-20">
          <span className="p-10 flex flex-col gap-2">
            <p className="text-4xl text-neutral-50 font-semibold">Learn more than just a language</p>
            <p className="text-xs text-neutral-50">Over 100,000 students join us monthly</p>
            <span className="flex flex-row">
              <span className="flex flex-row -space-x-4">
                <Image src={"/images/Item.png"} height={40} width={40} alt="icon"></Image>
                <Image src={"/images/Item.png"} height={40} width={40} alt="icon"></Image>
                <Image src={"/images/Item.png"} height={40} width={40} alt="icon"></Image>
                <Image src={"/images/Item.png"} height={40} width={40} alt="icon"></Image>
                <Image src={"/images/Item.png"} height={40} width={40} alt="icon"></Image>
              </span>
              <Link href={"#"} className="ps-2 my-auto text-neutral-50 underline text-xs">and others</Link>
            </span>
          </span>
          <span className="relative flex p-10">
            <button className="block px-6 py-3 m-auto rounded-sm bg-neutral-50 text-bg-blue font-semibold text-xs">Get your free lessons now</button>
            {/* <ul className="overflow-hidden">
              <li className="absolute h-96 w-96 border-2 border-solid border-neutral-50 rounded-full"></li>
            </ul> */}
          </span>
        </div>
      </div>
    </>
  );
}

