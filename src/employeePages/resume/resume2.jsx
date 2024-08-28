import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
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
const Resume2 = () => {
  const FormattedDate = ({ children }) => {
    return <>{moment(children).format("MMMM, DD, YYYY")}</>;
  };

  const personalInfoValues = useSelector(
    (state) => state.employeeCreateResumeSlice.personalInfoValues
  );
  const educationData = useSelector(
    (state) => state.employeeCreateResumeSlice.educationData
  );
  const employmentData = useSelector(
    (state) => state.employeeCreateResumeSlice.employmentData
  );
  const customSectionData = useSelector(
    (state) => state.employeeCreateResumeSlice.customSectionData
  );
  const skillsData = useSelector(
    (state) => state.employeeCreateResumeSlice.skillsData
  );
  const websiteData = useSelector(
    (state) => state.employeeCreateResumeSlice.websiteData
  );
  const editorValue = useSelector((state) => state.editor.editorValue);
  const textEditorValue = useSelector(
    (state) => state.employeeTextEditorSlice.textEditorValue
  );

  const certificationData = useSelector(
    (state) => state.employeeCreateResumeSlice.certificationData
  );

  const DownloadResume2 = () => {
    Font.register({
      family: "Fira-regular",
      src: require("../../fonts/Fira_Sans/FiraSans-Regular.ttf"),
    });
    Font.register({
      family: "Fira-semi",
      src: require("../../fonts/Fira_Sans/FiraSans-SemiBold.ttf"),
    });
    Font.register({
      family: "Fira-bold",
      src: require("../../fonts/Fira_Sans/FiraSans-Bold.ttf"),
    });
    Font.register({
      family: "Fira-italic",
      src: require("../../fonts/Fira_Sans/FiraSans-Italic.ttf"),
    });
    Font.register({
      family: "Fira-boldItalic",
      src: require("../../fonts/Fira_Sans/FiraSans-BoldItalic.ttf"),
    });

    const styles = {
      mainContainer: {
        height: "100%",
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Fira-regular",
        gap: "12px",
        lineHeight: "1.4",
        color: "#767676",
        fontSize: "10px",
      },
      nameAndJobTitleContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "7px",
        padding: "30px",
        backgroundColor: "#f7f7f7",
        color: "#000000",
      },
      nameContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "7px",
      },
      firstNameValue: {
        fontSize: "20px",
        fontFamily: "Fira-bold",
        color: "#000000",
        letterSpacing: "2.3",
      },
      lastNameValue: {
        fontSize: "20px",
        fontFamily: "Fira-bold",
        color: "#666666",
        letterSpacing: "2.3",
      },
      jobTitle: {
        fontSize: "14px",
      },
      boxContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        // padding: "15px",
      },
      box40: {
        width: "45%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        paddingLeft: "30px",
        paddingRight: "30px",
      },
      personalDetails: {
        display: "flex",
        flexDirection: "column",
        gap: "7px",
      },
      personalDetailsBox: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      },
      personalDetailsFlexWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "4px",
      },
      headings: {
        fontSize: "12px",
        fontFamily: "Fira-semi",
        letterSpacing: "1.7",
        color: "#000000",
      },
      span: {
        fontFamily: "Fira-semi",
        color: "#767676",
      },
      dateContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      listItem: {
        // marginTop: 5,
        flexDirection: "row",
        fontSize: "10px",
        paddingLeft: "15px",
      },
      listItemContent: {
        flex: 1,
        textAlign: "left",
        paddingLeft: 5,
        fontSize: "10px",
      },
      bold: {
        fontFamily: "Fira-bold",
        marginBottom: "0px",
      },
      italic: {
        // fontStyle: "italic",
        fontFamily: "Fira-italic",
        marginBottom: "0px",
      },
      underline: {
        textDecoration: "underline",
        marginBottom: "0px",
      },
      boldItalic: {
        fontFamily: "Fira-boldItalic",
        marginBottom: "0px",
      },
      list: {
        fontSize: "10px",
      },
      textEditorValue: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        borderTop: "1px",
        borderColor: "#000000",
        paddingTop: "10px",
      },
      listStyle: {
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
      },
      box60: {
        width: "55%",
        borderLeft: "1px",
        borderColor: "#000000",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        paddingLeft: "30px",
        paddingRight: "30px",
      },
      links: {
        color: "#000000",
      },
      grayHeading: {
        color: "#767676",
        fontFamily: "Fira-semi",
      },
      subHeading: {
        color: "#000000",
        fontFamily: "Fira-semi",
      },
    };

    // const parseInline = (text) => {
    //   // Split text on tags to create an array with text and tags separately
    //   const parts = text.split(/(<\/?(?:em|strong|u)>)/g);

    //   let combinedStyles = [];

    //   for (let i = 0; i < parts.length; i++) {
    //     let part = parts[i];
    //     if (part === "<strong>" || part === "<em>" || part === "<u>") {
    //       // Check the next part for a matching opening tag
    //       let nextPart = parts[i + 2];
    //       if (
    //         (part === "<strong>" && nextPart === "<em>") ||
    //         (part === "<em>" && nextPart === "<strong>")
    //       ) {
    //         // Nested bold and italic
    //         combinedStyles.push(
    //           <Text key={`bold-italic-${i}`} style={styles.boldItalic}>
    //             {parts[i + 3]}
    //           </Text>
    //         );
    //         i += 4; // Skip the nested structure
    //       } else if (part === "<strong>") {
    //         combinedStyles.push(
    //           <Text key={`bold-${i}`} style={styles.bold}>
    //             {parts[i + 1]}
    //           </Text>
    //         );
    //         i += 2;
    //       } else if (part === "<em>") {
    //         combinedStyles.push(
    //           <Text key={`italic-${i}`} style={styles.italic}>
    //             {parts[i + 1]}
    //           </Text>
    //         );
    //         i += 2;
    //       } else if (part === "<u>") {
    //         combinedStyles.push(
    //           <Text key={`underline-${i}`} style={styles.underline}>
    //             {parts[i + 1]}
    //           </Text>
    //         );
    //         i += 2;
    //       }
    //     } else if (!part.match(/^<\/?(?:em|strong|u)>$/)) {
    //       // It's just text
    //       combinedStyles.push(<Text key={`text-${i}`}>{part}</Text>);
    //     }
    //   }

    //   return combinedStyles.filter((component) => component != null);
    // };

    const parseInline = (text) => {
      // Remove cursor span tags to prevent them from being processed
      text = text.replace(/<span class="ql-cursor">.*?<\/span>/g, "");

      // Split text on tags to create an array with text and tags separately, including em, strong, u, and br tags
      const parts = text.split(/(<\/?(?:em|strong|u|br ?\/?)>)/g);

      let combinedStyles = [];

      for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (part === "<strong>" || part === "<em>" || part === "<u>") {
          let nextPart = parts[i + 2];
          if (
            (part === "<strong>" && nextPart === "<em>") ||
            (part === "<em>" && nextPart === "<strong>")
          ) {
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
        } else if (!part.match(/^<\/?(?:em|strong|u|br ?\/?)>$/)) {
          // It's just text or ignored tags
          combinedStyles.push(<Text key={`text-${i}`}>{part}</Text>);
        }
      }

      return combinedStyles.filter((component) => component != null);
    };
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

    const ListItem = ({ children }) => {
      return (
        <View style={styles.listStyle}>
          <Text>•</Text>
          <Text>{children}</Text>
        </View>
      );
    };
    return (
      <Document>
        <Page size="A4" style={styles.mainContainer}>
          {personalInfoValues.firstName ||
          personalInfoValues.lastName ||
          personalInfoValues.jobTitle ? (
            <View style={styles.nameAndJobTitleContainer}>
              {personalInfoValues.firstName || personalInfoValues.lastName ? (
                <View style={styles.nameContainer}>
                  <Text style={styles.firstNameValue}>
                    {personalInfoValues.firstName}
                  </Text>
                  <Text style={styles.lastNameValue}>
                    {personalInfoValues.lastName}
                  </Text>
                </View>
              ) : null}
              {personalInfoValues.jobTitle ? (
                <Text style={styles.jobTitle}>
                  {personalInfoValues.jobTitle}
                </Text>
              ) : null}
            </View>
          ) : null}
          <View style={styles.boxContainer}>
            <View style={styles.box40}>
              {personalInfoValues.address ||
              personalInfoValues.city ||
              personalInfoValues.country ||
              personalInfoValues.phoneNumber ||
              personalInfoValues.email ||
              personalInfoValues.postalcode ? (
                <View style={styles.personalDetails}>
                  <Text style={styles.headings}>CONTACT</Text>
                  <View style={styles.personalDetailsBox}>
                    {personalInfoValues.phoneNumber ? (
                      <View style={styles.personalDetailsFlexWrap}>
                        <Text style={styles.span}>PHONE - </Text>
                        <Text>{personalInfoValues.phoneNumber}</Text>
                      </View>
                    ) : null}

                    {personalInfoValues.email ? (
                      <View style={styles.personalDetailsFlexWrap}>
                        <Text style={styles.span}>EMAIL - </Text>
                        <Text>{personalInfoValues.email}</Text>
                      </View>
                    ) : null}

                    {personalInfoValues.address ? (
                      <View style={styles.personalDetailsFlexWrap}>
                        <Text style={styles.span}>ADDRESS - </Text>
                        <Text>{personalInfoValues.address}</Text>
                      </View>
                    ) : null}

                    {personalInfoValues.city ||
                    personalInfoValues.postalcode ||
                    personalInfoValues.country ? (
                      <View style={styles.personalDetailsFlexWrap}>
                        <Text style={styles.span}>CITY - </Text>
                        <Text>
                          {personalInfoValues.city}{" "}
                          {personalInfoValues.postalcode}{" "}
                          {personalInfoValues.country}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              ) : null}

              {textEditorValue ? (
                <View style={styles.textEditorValue}>
                  <Text style={styles.headings}>PROFESSIONAL SUMMARY</Text>
                  <View>{parseHtml(textEditorValue)}</View>
                </View>
              ) : null}

              {skillsData[0] ? (
                <View style={styles.personalDetails}>
                  <Text style={styles.grayHeading}>SKILLS</Text>
                  <View style={styles.personalDetailsBox}>
                    {skillsData.map((item, index) => {
                      return <ListItem key={index}>{item}</ListItem>;
                    })}
                  </View>
                </View>
              ) : null}

              {certificationData[0] ? (
                <View style={styles.personalDetails}>
                  <Text style={styles.grayHeading}>CERTIFICATIONS</Text>
                  <View style={styles.personalDetailsBox}>
                    {certificationData.map((item, index) => {
                      return <ListItem key={index}>{item}</ListItem>;
                    })}
                  </View>
                </View>
              ) : null}

              {websiteData[0] ? (
                <View style={styles.personalDetails}>
                  <Text style={styles.grayHeading}>SOCIAL LINKS</Text>
                  <View style={styles.personalDetailsBox}>
                    {websiteData.map((item, index) => {
                      return (
                        <Link style={styles.links} key={index} src={item.link}>
                          {item.label}
                        </Link>
                      );
                    })}
                  </View>
                </View>
              ) : null}

              {educationData[0] ? (
                <View style={styles.personalDetails}>
                  <Text style={styles.grayHeading}>EDUCATION</Text>
                  {educationData.map((item, index) => {
                    return (
                      <View key={index} style={styles.personalDetailsBox}>
                        <Text style={styles.span}>{item.degree}</Text>
                        <Text>
                          {item.school} {item.city1}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              ) : null}
            </View>
            <View style={styles.box60}>
              {employmentData[0] ? (
                <View style={styles.personalDetails}>
                  <Text style={styles.headings}>EXPERIENCE</Text>
                  {employmentData.map((item, index) => {
                    return (
                      <View key={index} style={styles.personalDetailsBox}>
                        <Text style={styles.subHeading}>{item.jobtitle1}</Text>
                        <Text>
                          {item.employer} {item.jobcity}
                        </Text>
                        <Text style={styles.dateContainer}>
                          <FormattedDate>{item.jobstart}</FormattedDate> {" - "}
                          <FormattedDate>{item.jobend}</FormattedDate>
                        </Text>

                        <View>{parseHtml(item.jobdescription)}</View>
                      </View>
                    );
                  })}
                </View>
              ) : null}

              {customSectionData[0] ? (
                <View style={styles.personalDetails}>
                  {customSectionData.map((item, index) => {
                    return (
                      <View key={index} style={styles.personalDetailsBox}>
                        <Text style={styles.subHeading}>
                          {item.sectionTitle}
                        </Text>
                        <Text>
                          {item.activity} {item.customSectionCity}
                        </Text>
                        <Text style={styles.dateContainer}>
                          <FormattedDate>{item.customStartDate}</FormattedDate>
                          {" - "}
                          <FormattedDate>{item.customEndDate}</FormattedDate>
                        </Text>

                        <View>{parseHtml(item.customDescription)}</View>
                      </View>
                    );
                  })}
                </View>
              ) : null}
            </View>
          </View>
        </Page>
      </Document>
    );
  };
  return (
    <div className="h-full bg-white min-h-[846px] overflow-y-scroll hide-scrollbar w-[600px] flex flex-col fira-sans-font gap-[12px] sm:text-[11px] text-[7px] text-[#767676]">
      {personalInfoValues.firstName ||
      personalInfoValues.lastName ||
      personalInfoValues.jobTitle ? (
        <div className="w-full flex flex-col gap-[7px] p-[30px] bg-[#f7f7f7] text-black">
          {personalInfoValues.firstName || personalInfoValues.lastName ? (
            <h1 className="text-[20px] font-semibold">
              {personalInfoValues.firstName}{" "}
              <span className="text-[#666666] font-semibold">
                {personalInfoValues.lastName}
              </span>
            </h1>
          ) : null}
          {personalInfoValues.jobTitle ? (
            <h2 className="text-[14px]">{personalInfoValues.jobTitle}</h2>
          ) : null}
        </div>
      ) : null}
      <div className=" flex w-full">
        <div className="w-[40%] flex flex-col gap-[12px] p-[15px] sm:p-[30px]">
          {personalInfoValues.address ||
          personalInfoValues.city ||
          personalInfoValues.country ||
          personalInfoValues.phoneNumber ||
          personalInfoValues.email ||
          personalInfoValues.postalcode ? (
            <div className="flex flex-col gap-[5px]">
              <h2 className="text-[10px] text-black font-semibold">CONTACT</h2>
              <div className="flex flex-col gap-[2px]">
                {personalInfoValues.phoneNumber ? (
                  <p className="flex items-center gap-[4px]">
                    <span className="font-medium">PHONE - </span>
                    {personalInfoValues.phoneNumber}
                  </p>
                ) : null}
                {personalInfoValues.email ? (
                  <p className="flex items-center flex-wrap gap-[4px]">
                    <span className="font-medium">EMAIL - </span>
                    {personalInfoValues.email}
                  </p>
                ) : null}
                {personalInfoValues.address ? (
                  <p className="flex flex-wrap items-center gap-[4px]">
                    <span className="font-medium">ADDRESS - </span>
                    {personalInfoValues.address}
                  </p>
                ) : null}
                {personalInfoValues.city ||
                personalInfoValues.postalcode ||
                personalInfoValues.country ? (
                  <p className="flex items-center flex-wrap gap-[4px]">
                    <span className="font-medium">CITY - </span>
                    {personalInfoValues.city} {personalInfoValues.postalcode}{" "}
                    {personalInfoValues.country}
                  </p>
                ) : null}
                {/* {personalInfoValues.nationality ? (
                  <p className="flex items-center gap-[4px]">
                    <span className="font-medium">NATIONALITY - </span>
                    {personalInfoValues.nationality}
                  </p>
                ) : null}
                {personalInfoValues.placeofbirth ||
                personalInfoValues.dateofbirth ? (
                  <p className="flex items-center flex-wrap gap-[4px]">
                    <span className="font-medium">
                      DATE / PLACE OF BIRTH -{" "}
                    </span>
                    {personalInfoValues.dateofbirth} {" / "}
                    {personalInfoValues.placeofbirth}
                  </p>
                ) : null}
                {personalInfoValues.drivinglicense ? (
                  <p className="flex items-center flex-wrap gap-[4px]">
                    <span className="font-medium">DRIVING LICENSE - </span>
                    {personalInfoValues.drivinglicense}
                  </p>
                ) : null} */}
              </div>
            </div>
          ) : null}
          {textEditorValue ? (
            <div className="flex border-t border-black pt-[10px] flex-col gap-[5px]">
              <h2 className="text-[10px] font-semibold text-black">
                PROFESSIONAL SUMMARY
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: textEditorValue }}
                className="ql-editor"
                style={{ padding: "0px", height: "auto" }}
              />
            </div>
          ) : null}

          {skillsData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[10px] font-semibold">SKILLS</h2>
              <ul className="list-disc">
                {skillsData.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          ) : null}

          {certificationData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[10px] font-semibold">CERTIFICATIONS</h2>
              <ul className="list-disc">
                {certificationData.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          ) : null}

          {websiteData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[10px] font-semibold">SOCIAL LINKS</h2>
              <div className="flex flex-col w-full gap-[4px]">
                {websiteData.map((item, index) => {
                  return (
                    <a
                      target="_blank"
                      className="underline"
                      key={index}
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ) : null}

          {educationData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[10px] font-semibold">EDUCATION</h2>
              {educationData.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[2px]">
                    <p className="font-medium">{item.degree}</p>
                    <p>
                      {item.school} {item.city1}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="w-[60%] p-[15px] sm:p-[30px] border-l border-black flex flex-col gap-[12px]">
          {employmentData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[12px] font-semibold text-black ">
                EXPERIENCE
              </h2>
              {employmentData.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[4px]">
                    <p className="font-medium text-black">{item.jobtitle1}</p>
                    <p>
                      {item.employer} {item.jobcity}
                    </p>
                    <div className="flex items-center">
                      <FormattedDate>{item.jobstart}</FormattedDate> {" - "}
                      <FormattedDate>{item.jobend}</FormattedDate>
                    </div>

                    {/* <p>{(item.jobdescription)}</p> */}
                    <div
                      className="ql-editor"
                      style={{ padding: "0px", height: "auto" }}
                      dangerouslySetInnerHTML={{ __html: item.jobdescription }}
                    />
                  </div>
                );
              })}
            </div>
          ) : null}

          {customSectionData[0] ? (
            <div className="flex flex-col gap-[7px]">
              {customSectionData.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[4px]">
                    <h2 className="text-[12px] font-semibold">
                      {item.sectionTitle}
                    </h2>
                    <p>
                      {item.activity} {item.customSectionCity}
                    </p>
                    <p>
                      {item.customStartDate} {item.customEndDate}
                    </p>
                    {/* <p>{item.customDescription}</p> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.customDescription,
                      }}
                      className="ql-editor"
                      style={{ padding: "0px", height: "auto" }}
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center">
        <PDFDownloadLink
          document={<DownloadResume2 />}
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
      </div>
    </div>
  );
};

export default Resume2;
