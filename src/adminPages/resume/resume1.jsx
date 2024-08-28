import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Page,
  View,
  Document,
  Text,
  Link,
  Image,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";
// import { setResumeImage1 } from "../state/reducers/resumeimageSlice";
import { fetchButtonVisibility } from "../../state/actions/visibilityActions";
import { reduceDownload } from "../../state/actions/visibilityActions";
import ReactToPrint from "react-to-print";
import { Navigate, useNavigate } from "react-router-dom";
const Resume1 = () => {
  const dispatch = useDispatch();
  const onclick = () => {
    dispatch(reduceDownload());
  };
  useEffect(() => {
    dispatch(fetchButtonVisibility());
  }, [dispatch]);
  const isButtonVisible = useSelector(
    (state) => state.visibility.isButtonVisible
  );
  // const exportImage = async () => {
  //   try {
  //     const imageData = await exportAsImage(containerRef.current);
  //     dispatch(setResumeImage1(imageData));
  //     console.log(imageData);
  //   } catch (error) {
  //     console.error("Error capturing image:", error);
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     exportImage();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  const containerRef = useRef(null);

  const personalInfoValues = useSelector(
    (state) => state.createResumeSlice.personalInfoValues
  );
  const editorValue = useSelector((state) => state.textEditor.textEditorValue);
  const skillsData = useSelector((state) => state.createResumeSlice.skillsData);
  const websiteData = useSelector(
    (state) => state.createResumeSlice.websiteData
  );
  const educationData = useSelector(
    (state) => state.createResumeSlice.educationData
  );
  const imageValue = useSelector((state) => state.image.imageValue);
  const employementData = useSelector(
    (state) => state.createResumeSlice.employmentData
  );
  const customSectionData = useSelector(
    (state) => state.createResumeSlice.customSectionData
  );
  const navigate = useNavigate();
  const Resume1Download = () => {
    Font.register({
      family: "Poppins-regular",
      src: require("../../fonts/Poppins/Poppins-Regular.ttf"),
    });
    Font.register({
      family: "Poppins-semi",
      src: require("../../fonts/Poppins/Poppins-SemiBold.ttf"), // Make sure to provide the correct path to your font file.
    });

    Font.register({
      family: "Poppins-bold",
      src: require("../../fonts/Poppins/Poppins-Bold.ttf"), // Make sure to provide the correct path to your font file.
    });

    const styles = {
      container: {
        flexDirection: "column",
        width: "100%",
        padding: 20,
      },
      header: {
        flexDirection: "row",
        gap: "5px",
        marginBottom: 12,
        alignItems: "top",
        justifyContent: "space-between",
      },
      leftColumn: {
        width: "40%",
      },
      rightColumn: {
        width: "55%",
      },

      content: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
      },
      leftside: {
        width: "100%",
      },
      rightside: {
        width: "100%",
      },
      box: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#e2e8f0",
        borderRadius: 12,
      },
      title: {
        fontSize: "14px",
        marginBottom: 5,
        fontFamily: "Poppins-bold",
      },
      name: {
        fontSize: "17px",
        fontWeight: 700,
        fontFamily: "Poppins-bold",
        lineHeight: 1,
        marginBottom: 5,
      },
      heading: {
        fontSize: "14px",
        marginBottom: 2,
        fontFamily: "Poppins-bold",
      },
      subheading: {
        padding: 5,
        paddingLeft: 8,
        backgroundColor: "black",
        color: "white",
        fontSize: "11px",
        marginBottom: 5,
        fontFamily: "Poppins-semi",
      },
      text: {
        fontSize: "11px",
        marginBottom: 2,
        fontFamily: "Poppins-regular",
      },
      link: {
        fontSize: "11px",
        color: "black",
        marginBottom: 2,
      },
      img: {
        marginBottom: 10,
      },
      innerBox: {
        marginBottom: 12,
      },
      jobtitle: {
        fontSize: "11px",
        marginBottom: 2,
        fontFamily: "Poppins-semi",
      },
    };

    return (
      <Document>
        <Page size="A4" style={styles.container}>
          <View style={styles.header}>
            <View style={styles.leftColumn}>
              {imageValue ? (
                <Image style={styles.img} source={imageValue} />
              ) : null}

              <Text style={styles.jobtitle}>{personalInfoValues.jobTitle}</Text>
              <Text style={styles.text}>{personalInfoValues.email}</Text>
              <Text style={styles.text}>{personalInfoValues.phoneNumber}</Text>
              <View style={styles.personalInfo}>
                <Text style={styles.text}>{personalInfoValues.address}</Text>
                <Text style={styles.text}>{personalInfoValues.city}</Text>
                <Text style={styles.text}>{personalInfoValues.postalcode}</Text>
                <Text style={styles.text}>{personalInfoValues.country}</Text>
              </View>
              {personalInfoValues.dateofbirth ||
              personalInfoValues.placeofbirth ? (
                <View>
                  <Text style={styles.heading}>Date / Birth Place</Text>
                  <Text style={styles.text}>
                    {personalInfoValues.placeofbirth}{" "}
                    {personalInfoValues.dateofbirth}
                  </Text>
                </View>
              ) : null}
              {personalInfoValues.drivinglicense ? (
                <View>
                  <Text style={styles.heading}>Driving License</Text>
                  <Text style={styles.text}>
                    {personalInfoValues.drivinglicense}
                  </Text>
                </View>
              ) : null}
              {personalInfoValues.nationality ? (
                <View>
                  <Text style={styles.heading}>Nationality</Text>
                  <Text style={styles.text}>
                    {personalInfoValues.nationality}
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.name}>{personalInfoValues.firstName}</Text>
              <Text style={styles.name}>{personalInfoValues.lastName}</Text>
              {editorValue ? (
                <View style={styles.box}>
                  <Text style={styles.text}>{editorValue}</Text>
                </View>
              ) : null}

              <View style={styles.rightside}>
                {websiteData[0] ? (
                  <View style={styles.box}>
                    <Text style={styles.title}>Links</Text>
                    {websiteData.map((item, index) => (
                      <Link style={styles.link} key={index} src={item.link}>
                        {item.label}
                      </Link>
                    ))}
                  </View>
                ) : null}
                {skillsData[0] ? (
                  <View style={styles.box}>
                    <Text style={styles.title}>Skills</Text>
                    {skillsData.map((item, index) => (
                      <Text style={styles.text} key={index}>
                        {item}
                      </Text>
                    ))}
                  </View>
                ) : null}
                {personalInfoValues.clearance ? (
                  <View style={styles.box}>
                    <Text style={styles.heading}>Security Clearance:</Text>
                    <Text style={styles.text}>
                      {personalInfoValues.clearance}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.leftside}>
              {employementData[0] ? (
                <View>
                  <Text style={styles.title}>Employement History</Text>
                  {employementData.map((item, index) => (
                    <View key={index} style={styles.innerBox}>
                      <Text style={styles.subheading}>
                        {item.jobtitle1} {item.employer} {item.jobcity}
                      </Text>
                      <Text style={styles.text}>
                        {item.jobstart} - {item.jobend}
                      </Text>
                      <Text style={styles.text}>{item.jobdescription}</Text>
                    </View>
                  ))}
                </View>
              ) : null}

              {educationData[0] ? (
                <View>
                  <Text style={styles.title}>Education</Text>
                  {educationData.map((item, index) => (
                    <View key={index} style={styles.innerBox}>
                      <Text style={styles.subheading}>
                        {item.degree} {item.school} {item.city1}
                      </Text>
                      <Text style={styles.text}>
                        {item.start} - {item.end}
                      </Text>
                      <Text style={styles.text}>{item.edudescription}</Text>
                    </View>
                  ))}
                </View>
              ) : null}
              {customSectionData[0] ? (
                <View>
                  {customSectionData.map((item, index) => (
                    <View key={index} style={styles.innerBox}>
                      <Text style={styles.title}>{item.sectionTitle}</Text>
                      <Text style={styles.subheading}>
                        {item.activity} {item.customSectionCity}
                      </Text>
                      <Text style={styles.text}>
                        {item.customStartDate} - {item.customEndDate}
                      </Text>
                      <Text style={styles.text}>{item.customDescription}</Text>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>
          </View>
        </Page>
      </Document>
    );
  };
  return (
    /* prettier-ignore */
    <div className="h-full bg-white min-h-[846px] w-[600px] flex flex-col items-center justify-between ">
      <div
        ref={containerRef}
        className="flex flex-col overflow-y-scroll hide-scrollbar max-[1100px]:mt-0 w-full max-[650px]:w-full h-auto p-[20px]"
        id="doc">
        <div className="flex gap-7 max-[650px]:items-start">
          <div className="w-1/3">
            {imageValue ? <img src={imageValue} alt="resume" /> : null}
            <h3 className="font-semibold text-[14px] max-[650px]:text-[9px] max-[650px]:leading-[1.4em] max-[650px]:mb-1">
              {personalInfoValues.jobTitle}
            </h3>
            <p className="text-[11px] max-[650px]:text-[9px] ">
              {personalInfoValues.email}
            </p>
            <p className="text-[11px] max-[650px]:text-[9px] ">
              {personalInfoValues.phoneNumber}
            </p>
            <div className="flex flex-wrap gap-2 my-2 max-[650px]:my-1 max-[650px]:gap-1 ">
              <p className="text-[11px] max-[650px]:text-[9px]">
                {personalInfoValues.address}
              </p>
              <p className="text-[11px] max-[650px]:text-[9px]">
                {personalInfoValues.city}
              </p>
              <p className="text-[11px] max-[650px]:text-[9px]">
                {personalInfoValues.postalcode}
              </p>
              <p className="text-[11px] max-[650px]:text-[9px]">
                {personalInfoValues.country}
              </p>
            </div>
            {personalInfoValues.placeofbirth ||
            personalInfoValues.dateofbirth ? (
              <h2 className="font-semibold text-[14px] mt-2 max-[650px]:text-[9px]">
                Date / Birth Place
              </h2>
            ) : null}

            <div className="flex gap-1 text-[11px] max-[650px]:text-[9px]">
              <p>{personalInfoValues.placeofbirth}</p>
              <p>{personalInfoValues.dateofbirth}</p>
            </div>
            {personalInfoValues.drivinglicense ? (
              <h2 className="font-semibold text-[14px] mt-2 max-[650px]:text-[9px]">
                Driving License
              </h2>
            ) : null}

            <p className="max-[650px]:text-[9px] text-[11px]">
              {personalInfoValues.drivinglicense}
            </p>
            {personalInfoValues.nationality ? (
              <h2 className="font-semibold text-[14px] mt-2 max-[650px]:text-[9px]">
                Nationality
              </h2>
            ) : null}

            <p className="max-[650px]:text-[9px] text-[11px]">
              {personalInfoValues.nationality}
            </p>
          </div>
          <div className="w-2/3">
            <h1 className="text-[17px] font-bold ml-10 max-[650px]:text-[12px] max-[650px]:leading-[1.4em]">
              {personalInfoValues.firstName}
            </h1>
            <h2 className="text-[17px] font-bold ml-10 max-[650px]:text-[12px] max-[650px]:leading-[1.4em]">
              {personalInfoValues.lastName}
            </h2>
            {editorValue ? (
              <div className="px-4 py-4 my-5 rounded-xl bg-slate-200 max-[650px]:text-[9px] text-[11px]">
                {editorValue}
              </div>
            ) : null}

            <div className="1/2">
              {
                websiteData[0] ? (
                  <div className="bg-slate-200 mb-4 px-4 py-4 rounded-xl max-[650px]:text-[9px] max-[650px]:leading-[1.2em]">
                    <h2 className="text-[14px] font-semibold mb-2 max-[650px]:text-[9px] max-[650px]:leading-[1.2em] ">
                      Links
                    </h2>
                    {websiteData.map((item, index) => {
                      return (
                        <h3 key={index}
                          onClick={() =>
                            window.open(`//${item.link}`, "_blank")
                          }
                          className="underline pb-1 text-[11px] max-[650px]:text-[9px]">
                          {item.label}
                        </h3>
                      );
                    })}
                  </div>
                ) : null
              }

              {
                skillsData[0] ? (
                  <div className="bg-slate-200 mb-4 px-4 py-4 rounded-xl max-[650px]:text-[9px] max-[650px]:leading-[1.2em] ">
                    <h2 className="text-[14px] font-semibold mb-2 max-[650px]:text-[9px] max-[650px]:leading-[1.2em] ">
                      Skills
                    </h2>
                    {skillsData.map((item, index) => {
                      return (
                        <h3
                          className="text-[11px] max-[650px]:text-[9px]"
                          key={index}>
                          {item}
                        </h3>
                      );
                    })}
                  </div>
                ) : null
              }

              {personalInfoValues.clearance ? (
                <div className="flex items-center gap-2 bg-slate-200 mb-4 px-4 py-4 rounded-xl flex-wrap max-[650px]:text-[9px] max-[650px]:leading-[1.2em] ">
                  <h2 className="font-semibold text-[14px] max-[650px]:text-[9px] max-[650px]:leading-[1.2em] ">
                    Security Clearance :
                  </h2>
                  <p className="text-[11px] max-[650px]:text-[9px]">
                    {personalInfoValues.clearance}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-full flex gap-5 my-6 max-[650px]:my-2">
          <div className="w-full">
            {
              employementData[0] ? (
                <>
                  <h2 className="text-[14px] font-semibold max-[650px]:text-[9px] max-[650px]:leading-[1.2em]   ">
                    Employement History
                  </h2>
                  {employementData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="my-2 text-[11px] flex flex-col gap-2 max-[650px]:text-[9px] max-[650px]:my-2  ">
                        <h3 className="bg-black px-2 py-2 text-white font-bold text-[11px] max-[650px]:text-[9px] max-[650px]:py-2 max-[650px]:leading-[1.3em]">
                          {item.jobtitle1} {item.employer} {item.jobcity}
                        </h3>
                        <h3>
                          {item.jobstart} - {item.jobend}
                        </h3>
                        <ul>
                          <li className="max-[650px]:text-[9px]">
                            {item.jobdescription}
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </>
              ) : null
            }

            {
              educationData[0] ? (
                <>
                  <h2 className="text-[14px] font-semibold mt-5 max-[650px]:text-[9px] max-[650px]:mt-3 max-[650px]:leading-[1.2em]">
                    Education
                  </h2>
                  {educationData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="my-2 flex  flex-col text-[11px] gap-2 max-[650px]:text-[9px] max-[650px]:my-2 ">
                        <h3 className="bg-black px-2 py-2 text-[11px]  text-white font-bold max-[650px]:text-[9px]  max-[650px]:py-2 max-[650px]:leading-[1.3em]">
                          {item.degree} {item.school} {item.city1}
                        </h3>
                        <h3>
                          {item.start} - {item.end}
                        </h3>
                        <ul>
                          <li>{item.edudescription}</li>
                        </ul>
                      </div>
                    );
                  })}
                </>
              ) : null
            }
            {customSectionData[0] ? (
              <>
                {customSectionData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" flex  flex-col text-[11px] gap-2 max-[650px]:text-[9px] max-[650px]:my-2 ">
                      <h2 className="text-[14px] font-semibold mt-5 max-[650px]:text-[9px] max-[650px]:mt-3 max-[650px]:leading-[1.2em]">
                        {item.sectionTitle}
                      </h2>
                      <h3 className="bg-black px-2 py-2 text-[11px]  text-white font-bold max-[650px]:text-[9px]  max-[650px]:py-2 max-[650px]:leading-[1.3em]">
                        {item.activity} {item.customSectionCity}
                      </h3>
                      <h3>
                        {item.customStartDate} - {item.customEndDate}
                      </h3>
                      <ul>
                        <li>{item.customDescription}</li>
                      </ul>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>

      {/* <div className="mt-4 bg-clearanceGrey w-full items-center gap-5 flex justify-center">
        {isButtonVisible ? (
          <PDFDownloadLink
            onClick={onclick}
            document={<Resume1Download />}
            style={{
              textDecoration: "none",
              padding: "5px 8px",
              color: "black",
              fontWeight: 500,
              fontSize : "14px",
              backgroundColor: "white",
              border: "1px solid #4A90E2",
              borderRadius: "4px",
              margin: "10px 0",
            }}>
            Download PDF
          </PDFDownloadLink>
        ) : (
          <button
            onClick={() => navigate("/dashboard/payment")}
            style={{
              textDecoration: "none",
              padding: "5px 8px",
              color: "black",
              fontSize : "14px",
              fontWeight: 500,
              backgroundColor: "white",
              border: "1px solid #4A90E2",
              borderRadius: "4px",
              margin: "10px 0",
            }}>
            Download PDF
          </button>
        )}

        {isButtonVisible ? (
          <ReactToPrint
            trigger={() => {
              return (
                <button
                  style={{
                    textDecoration: "none",
                    padding: "5px 8px",
                    color: "black",
                    fontWeight: 500,
                    fontSize : "14px",
                    backgroundColor: "white",
                    border: "1px solid #4A90E2",
                    borderRadius: "4px",
                    margin: "10px 0",
                  }}>
                  Print
                </button>
              );
            }}
            content={() => containerRef.current}
          />
        ) : (
          <button
            onClick={() => navigate("/dashboard/payment")}
            style={{
              textDecoration: "none",
              padding: "5px 8px",
              color: "black",
              fontWeight: 500,
              fontSize : "14px",
              backgroundColor: "white",
              border: "1px solid #4A90E2",
              borderRadius: "4px",
              margin: "10px 0",
            }}>
            Print
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Resume1;
