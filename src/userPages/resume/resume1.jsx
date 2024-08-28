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
import moment from "moment";
const Resume1 = () => {
  const FormattedDate = ({ children }) => {
    const isValidDate = moment(children, moment.ISO_8601, true).isValid();

    if (!isValidDate) {
      return null;
    }

    return <>{moment(children).format("MMMM DD, YYYY")}</>;
  };
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

  const textEditorValue = useSelector(
    (state) => state.userTextEditorSlice.textEditorValue
  );
  useEffect(() => {
    console.log(textEditorValue, "LAVI");
  }, [textEditorValue]);
  const navigate = useNavigate();
  const Resume1Download = () => {
    Font.register({
      family: "Poppins-regular",
      src: require("../../fonts/Poppins/Poppins-Regular.ttf"),
    });
    Font.register({
      family: "Poppins-semi",
      src: require("../../fonts/Poppins/Poppins-SemiBold.ttf"),
    });

    Font.register({
      family: "Poppins-bold",
      src: require("../../fonts/Poppins/Poppins-Bold.ttf"),
    });

    Font.register({
      family: "Poppins-italic",
      src: require("../../fonts/Poppins/Poppins-Italic.ttf"),
    });

    Font.register({
      family: "Poppins-boldItalic",
      src: require("../../fonts/Poppins/Poppins-BoldItalic.ttf"),
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
        display: "flex",
        flexDirection: "column",
        gap: "0px",
      },
      textEditorValue: {
        display: "flex",
        flexDirection: "column",
      },
      title: {
        fontSize: "14px",
        marginBottom: 5,
        fontFamily: "Poppins-bold",
      },
      name: {
        fontSize: "17px",
        // fontWeight: 700,
        fontFamily: "Poppins-bold",
        lineHeight: 1,
        marginBottom: 5,
        // fontStyle: "italic",
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
      textEditor: {
        boxSizing: "border-box",
        lineHeight: "1.42",
        height: "auto",
        overFlowY: "auto",
        padding: "12px",
        tabSize: "4",
        textAlign: "left",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        backgroundColor: "#e2e8f0",
      },

      page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      },
      paragraph: {
        marginTop: 10,
        fontSize: 12,
        lineHeight: 1.5,
      },
      listItem: {
        // marginTop: 5,
        flexDirection: "row",
        fontSize: "12px",
        paddingLeft: "15px",
      },
      listItemContent: {
        flex: 1,
        textAlign: "left",
        paddingLeft: 5,
        fontSize: 12,
      },
      bold: {
        fontFamily: "Poppins-bold",
        marginBottom: "0px",
      },
      italic: {
        // fontStyle: "italic",
        fontFamily: "Poppins-italic",
        marginBottom: "0px",
      },
      underline: {
        textDecoration: "underline",
        marginBottom: "0px",
      },
      boldItalic: {
        fontFamily: "Poppins-boldItalic",
        marginBottom: "0px",
      },
      list: {
        fontSize: "12px",
      },
    };

    // const parseInline = (text) => {
    //   let parts = text.split(/(<\/?(em|strong|u)>)/g); // Include the captured groups in the split regex
    //   return parts.map((part, index) => {
    //     if (!part.trim()) {
    //       return null;
    //     } else if (part === "<strong>") {
    //       return (
    //         <Text key={index} style={styles.bold}>
    //           {parts[index + 1]}
    //         </Text>
    //       ); // Render the content after <strong> tag
    //     } else if (part === "<em>") {
    //       return (
    //         <Text key={index} style={styles.italic}>
    //           {parts[index + 1]}
    //         </Text>
    //       ); // Render the content after <em> tag
    //     } else if (part === "<u>") {
    //       return (
    //         <Text key={index} style={styles.underline}>
    //           {parts[index + 1]}
    //         </Text>
    //       ); // Render the content after <u> tag
    //     } else {
    //       return <Text key={index}>{part}</Text>;
    //     }
    //   });
    // };

    // const parseInline = (text) => {
    //   let parts = text.split(/(<\/?(em|strong|u)>)/g);
    //   return parts
    //     .map((part, index) => {
    //       if (!part.trim()) {
    //         return null;
    //       } else if (part === "<strong>") {
    //         return (
    //           <Text key={index} style={styles.bold}>
    //             {parts[index + 1]}
    //           </Text>
    //         );
    //       } else if (part === "<em>") {
    //         return (
    //           <Text key={index} style={styles.italic}>
    //             {parts[index + 1]}
    //           </Text>
    //         );
    //       } else if (part === "<u>") {
    //         return (
    //           <Text key={index} style={styles.underline}>
    //             {parts[index + 1]}
    //           </Text>
    //         );
    //       } else if (part.match(/^<\/(em|strong|u)>$/)) {
    //         // Do nothing for closing tags
    //         return null;
    //       } else {
    //         return <Text key={index}>{part}</Text>;
    //       }
    //     })
    //     .filter((part) => part !== null); // Filter out null values
    // };

    const parseInline = (text) => {
      // Split text on tags to create an array with text and tags separately
      const parts = text.split(/(<\/?(?:em|strong|u)>)/g);

      let combinedStyles = [];

      for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (part === "<strong>" || part === "<em>" || part === "<u>") {
          // Check the next part for a matching opening tag
          let nextPart = parts[i + 2];
          if (
            (part === "<strong>" && nextPart === "<em>") ||
            (part === "<em>" && nextPart === "<strong>")
          ) {
            // Nested bold and italic
            combinedStyles.push(
              <Text key={`bold-italic-${i}`} style={styles.boldItalic}>
                {parts[i + 3]}
              </Text>
            );
            i += 4; // Skip the nested structure
          } else if (part === "<strong>") {
            combinedStyles.push(
              <Text key={`bold-${i}`} style={styles.bold}>
                {parts[i + 1]}
              </Text>
            );
            i += 2;
          } else if (part === "<em>") {
            combinedStyles.push(
              <Text key={`italic-${i}`} style={styles.italic}>
                {parts[i + 1]}
              </Text>
            );
            i += 2;
          } else if (part === "<u>") {
            combinedStyles.push(
              <Text key={`underline-${i}`} style={styles.underline}>
                {parts[i + 1]}
              </Text>
            );
            i += 2;
          }
        } else if (!part.match(/^<\/?(?:em|strong|u)>$/)) {
          // It's just text
          combinedStyles.push(<Text key={`text-${i}`}>{part}</Text>);
        }
      }

      return combinedStyles.filter((component) => component != null);
    };

    // const parseInline = (text) => {
    //   // Split text on tags to create an array with text and tags separately
    //   const parts = text.split(/(<\/?(?:em|strong|u)>)/g);

    //   return parts
    //     .map((part, index) => {
    //       switch (part) {
    //         case "<strong><em>" || "<em><strong>":
    //           return (
    //             <Text key={index} style={styles.boldItalic}>
    //               {parts[index + 1]}
    //             </Text>
    //           );
    //         case "<strong>":
    //           return (
    //             <Text key={index} style={styles.bold}>
    //               {parts[index + 1]}
    //             </Text>
    //           );
    //         case "<em>":
    //           return (
    //             <Text key={index} style={styles.italic}>
    //               {parts[index + 1]}
    //             </Text>
    //           );
    //         case "<u>":
    //           return (
    //             <Text key={index} style={styles.underline}>
    //               {parts[index + 1]}
    //             </Text>
    //           );
    //         default:
    //           if (part.match(/^<\/?(?:em|strong|u)>$/)) {
    //             // If it's a closing tag or an empty string, don't return anything
    //             return null;
    //           }
    //         // If it's not a tag, return the text as a Text component
    //         // return <Text key={index}>{part}</Text>;
    //       }
    //     })
    //     .filter((component) => component !== null);
    // };

    const parseHtml = (html) => {
      const regex =
        /<p>(.*?)<\/p>|<li>(.*?)<\/li>|<ul>(.*?)<\/ul>|<ol>(.*?)<\/ol>/g;
      let match;
      const output = [];

      while ((match = regex.exec(html))) {
        if (match[1]) {
          output.push(
            <Text key={match.index} style={styles.paragraph}>
              {parseInline(match[1])}
            </Text>
          );
        } else if (match[2]) {
          output.push(
            <View key={match.index} style={styles.listItem}>
              <Text>{"\u2022 "}</Text>
              {parseInline(match[2])}
            </View>
          );
        } else if (match[3]) {
          // Handling unordered list
          const listItems = match[3];
          const listItemRegex = /<li>(.*?)<\/li>/g;
          let listItemMatch;
          const listContent = [];
          while ((listItemMatch = listItemRegex.exec(listItems))) {
            listContent.push(
              <View key={listItemMatch.index} style={styles.listItem}>
                <Text>{"\u2022 "}</Text>
                {parseInline(listItemMatch[1])}
              </View>
            );
          }
          output.push(
            <View key={match.index} style={styles.list}>
              {listContent}
            </View>
          );
        } else if (match[4]) {
          // Handling ordered list in a similar way
          // ...
        }
        // You can add more else if blocks for other tags like <ol>
      }
      return output;
    };

    // const parseHtml = (html) => {
    //   const regex =
    //     /<p>(.*?)<\/p>|<li>(.*?)<\/li>|<ul>(.*?)<\/ul>|<ol>(.*?)<\/ol>/g;
    //   let match;
    //   const output = [];

    //   while ((match = regex.exec(html))) {
    //     if (match[1]) {
    //       output.push(
    //         <Text style={styles.paragraph}>{parseInline(match[1])}</Text>
    //       );
    //     } else if (match[2]) {
    //       output.push(
    //         <View style={styles.listItem}>
    //           <Text>{`\u2022 `}</Text>
    //           <Text>{parseInline(match[2])}</Text>
    //         </View>
    //       );
    //     } else if (match[3]) {
    //       // Handling unordered list
    //       const listItems = match[3];
    //       const listItemRegex = /<li>(.*?)<\/li>/g;
    //       let listItemMatch;
    //       const listContent = [];
    //       while ((listItemMatch = listItemRegex.exec(listItems))) {
    //         listContent.push(
    //           <View style={styles.listItem}>
    //             <Text>{`\u2022 `}</Text>
    //             <Text>{parseInline(listItemMatch[1])}</Text>
    //           </View>
    //         );
    //       }
    //       output.push(<View style={styles.list}>{listContent}</View>);
    //     } else if (match[4]) {
    //       output.push(parseInline(match[4]));
    //     } else if (match[5]) {
    //       output.push(parseInline(match[5]));
    //     } else if (match[6]) {
    //       const listItems = match[6];
    //       const listItemRegex = /<li>(.*?)<\/li>/g;
    //       let listItemMatch;
    //       const listContent = [];
    //       while ((listItemMatch = listItemRegex.exec(listItems))) {
    //         listContent.push(
    //           <View style={styles.listItem}>
    //             <Text>{`${listContent.length + 1}. `}</Text>
    //             <Text>{parseInline(listItemMatch[1])}</Text>
    //           </View>
    //         );
    //       }
    //       output.push(<View style={styles.list}>{listContent}</View>);
    //     }
    //   }
    //   return output;
    // };

    const htmlContent = `<em>Hey there my name is lakshyadeep</em>`;
    console.log(htmlContent, "gautam");
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

              {textEditorValue ? (
                <View style={styles.box}>
                  <View>{parseHtml(textEditorValue)}</View>
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
                        <FormattedDate>{item.jobstart}</FormattedDate> -
                        <FormattedDate>{item.jobend}</FormattedDate>
                      </Text>
                      <View>{parseHtml(item.jobdescription)}</View>
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
                      <Text style={styles.text}>
                        {parseHtml(item.eduDescription)}
                      </Text>
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
                      <Text style={styles.text}>
                        {parseHtml(item.customDescription)}
                      </Text>
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
            {textEditorValue ? (
              <div dangerouslySetInnerHTML={{__html : textEditorValue}} style={{height: "auto", padding:"12px"}} className="ql-editor h-auto px-4 py-4 my-5 rounded-xl bg-slate-200 max-[650px]:text-[9px] text-[11px]" />
               
       
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
                        {/* <ul>
                          <li className="max-[650px]:text-[9px]">
                            {item.jobdescription}
                          </li>
                        </ul> */}
                        <div className="ql-editor" style={{height: "auto", padding:'0px'}}  dangerouslySetInnerHTML={{__html : item.jobdescription}}/>
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
                    console.log(item.educationDescription);
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
                          <div className="ql-editor" style={{height: "auto", padding: "0px"}} dangerouslySetInnerHTML={{__html : item.eduDescription}} />
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
                      {/* <ul>
                        <li>{item.customDescription}</li>
                      </ul> */}
                      <div className="ql-editor" style={{height: "auto",padding : "0px"}} dangerouslySetInnerHTML={{__html : item.customDescription}} />
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>
      <PDFDownloadLink
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

// import React from "react";
// import {
//   Document,
//   Page,
//   Text,
//   StyleSheet,
//   View,
//   PDFDownloadLink,
// } from "@react-pdf/renderer";

// // Define styles
// const styles = StyleSheet.create({
//   paragraph: {
//     marginBottom: 10,
//     fontFamily: "Helvetica",
//   },
//   bold: {
//     fontWeight: "bold",
//   },
//   italic: {
//     fontStyle: "italic",
//   },
//   underline: {
//     textDecoration: "underline",
//   },
//   listItem: {
//     flexDirection: "row",
//     marginBottom: 5,
//   },
//   list: {
//     marginLeft: 10,
//   },
// });

// React-pdf Document Component
// const Resume1 = ({ content }) => (

// );

{
  /* <div>
  <PDFDownloadLink
    document={<Resume1 />}
    style={{
      textDecoration: "none",
      padding: "5px 8px",
      color: "black",
      fontWeight: 500,
      fontSize: "14px",
      backgroundColor: "white",
      border: "1px solid #4A90E2",
      borderRadius: "4px",
      margin: "10px 0",
    }}
  >
    Download PDF
  </PDFDownloadLink>
</div>; */
}

// export default Resume1;
