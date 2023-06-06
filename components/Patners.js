import React from "react";
import Aos from "aos";
import styles from "../styles/About.module.css";
import PatnerCard from "../components/PatnerCard";

export default function About() {
  const [loading, setLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);
  // const [showMore, setShowMore] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    Aos.init();
  }, []);
  return (
    <div className={styles.root} style={{ overflow: loading ? "hidden" : "" }}>
      <div className={styles.rootContainer}>
      <div>
          <div className={styles.title} data-aos="zoom-out">
            Our Partners
          </div>
          <div className={styles.teamCardContainer}>
            <PatnerCard
              imgSrc={require("../public/images/Patners/fin1.png")}
              name="FINPORTAL"
              pos="Finance and Compliance Partner"
              des="We are a financial management company lead by a team of CAs and CFAs with over a decade of experience in this field. Our motto is to cater all the financial requirements like taxation, finance, investment and insurance all under one roof."
              cxo
            />
            <PatnerCard
              imgSrc={require("../public/images/Patners/Pentagon.png")}
              name="PENTAGON SYSTEM SERVICES"
              pos="Cloud Partner"
              des="Pentagon is a trusted partner for the management of critical business needs, providing IT strategic consulting and managed services."
              cxo
            />
            <PatnerCard
              imgSrc={require("../public/images/Patners/lst1.png")}
              name="LST CAPITAL"
              pos="Capital partner"
              des="LST Capital specializes in financial risk management and uses AI/ML algorithms to create effective quantitative financial tools and models."
              cxo
            />
            {/* <PatnerCard
              imgSrc={require("../public/images/People/COO.jpeg")}
              name="Karnik Gandhi"
              des="Chief Operating Officer"
              cxo
            /> */} 
            {/* <PatnerCard
              imgSrc={require("../public/images/People/CFO.jpeg")}
              name="Darshan Upadhyay"
              des="Chief Finance Officer"
              cxo
            />
            <PatnerCard
              imgSrc={require("../public/images/People/CSO.jpeg")}
              name="Nehal Jhajharia"
              des="Chief Strategy Officer"
              cxo
            /> */}
            {/* {showMore && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <PatnerCard
                    imgSrc={require("../public/images/People/Mohit.jpg")}
                    name="Mohit Doad"
                    des="Design Head"
                  />
                  <PatnerCard
                    imgSrc={require("../public/images/People/Burhanuddin.jpeg")}
                    name="Burhanuddin"
                    des="Research Head"
                  /> */}
                  {/* <PatnerCard
                    imgSrc={require("../public/images/People/Rohan.jpeg")}
                    name="Rohan Verma"
                    des="UI/UX Head"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                > */}
                  {/* <PatnerCard
                    imgSrc={require("../public/images/People/Romit.png")}
                    name="Romit Chakraborty"
                    des="Marketing Head"
                  />

                  <PatnerCard
                    imgSrc={require("../public/images/People/Vats.jpeg")}
                    name="Vats Agarawal"
                    des="Sales Head"
                  />
                  <PatnerCard
                    imgSrc={require("../public/images/People/Aniket.jpeg")}
                    name="Aniket Rana"
                    des="Tech Lead"
                  /> */}
                {/* </div>
              </div>
            )} */}
            {/* <div
              className={styles.viewMore}
              onClick={() => {
                setShowMore((prev) => !prev);
              }}
            >
              View {showMore ? "less" : "more"}
            </div> */}
          </div>
        </div>
       
      </div>
      
    </div>
  );
}
