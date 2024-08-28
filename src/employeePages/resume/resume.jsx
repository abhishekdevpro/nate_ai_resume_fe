import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
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
import parse from "html-react-parser";

const Resume = () => {
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
  const websiteData = useSelector(
    (state) => state.employeeCreateResumeSlice.websiteData
  );
  const customSectionData = useSelector(
    (state) => state.employeeCreateResumeSlice.customSectionData
  );
  const skillsData = useSelector(
    (state) => state.employeeCreateResumeSlice.skillsData
  );
  const editorValue = useSelector((state) => state.editor.editorValue);
  const textEditorValue = useSelector(
    (state) => state.employeeTextEditorSlice.textEditorValue
  );

  const certificationData = useSelector(
    (state) => state.employeeCreateResumeSlice.certificationData
  );

  const DownloadPDF = () => {
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
        display: "flex",
        flexDirection: "column",
        fontFamily: "Fira-regular",
        fontSize: "10px",
        gap: "7px",
        padding: "50px",
        lineHeight: "1.4",
      },
      name: {
        fontSize: "22px",
        fontFamily: "Fira-bold",
      },
      jobTitle: {
        fontFamily: "Fira-semi",
        fontSize: "15px",
      },
      flexWrapContainer: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "7px",
        flexDirection: "row",
        fontFamily: "Fira-regular",
      },
      regularText: {
        fontSize: "10px",
        fontFamily: "Fira-regular",
      },
      textEditorValue: {
        fontSize: "10px",
        fontFamily: "Fira-regular",
        borderTop: "1px",
        borderColor: "black",
        paddingTop: "5px",
      },
      headings: {
        fontSize: "14px",
        color: "#929ca4",
        fontFamily: "Fira-semi",
      },
      skills: {
        width: "30%",
        fontSize: "10px",
      },
      links: {
        textDecoration: "underline",
        color: "black",
      },
      flexColContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "7px",
      },
      flexColGap4: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      },
      semiBoldText: {
        fontFamily: "Fira-semi",
        fontSize: "10px",
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
      listStyle: {
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
        width: "30%",
        justifyContent: "center",
      },
      certifications: {
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
        width: "45%",
        justifyContent: "center",
      },
      bulletPoint: {
        alignSelf: "flex-start",
      },
      skillsMainContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
      },
      skillTitle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      },
      skillsWrapContainer: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "7px",
        flexDirection: "row",
        fontFamily: "Fira-regular",
        width: "100%",
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
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listItemContent}>{children}</Text>
        </View>
      );
    };
    const CertificationListItem = ({ children }) => {
      return (
        <View style={styles.certifications}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listItemContent}>{children}</Text>
        </View>
      );
    };
    return (
      <Document>
        <Page size="A4" style={styles.mainContainer}>
          {personalInfoValues.firstName || personalInfoValues.lastName ? (
            <Text style={styles.name}>
              {personalInfoValues.firstName} {personalInfoValues.lastName}
            </Text>
          ) : null}
          {personalInfoValues.jobTitle ? (
            <Text style={styles.jobTitle}>{personalInfoValues.jobTitle}</Text>
          ) : null}
          {personalInfoValues.phoneNumber ||
          personalInfoValues.email ||
          personalInfoValues.address ||
          personalInfoValues.city ||
          personalInfoValues.postalcode ||
          personalInfoValues.country ? (
            <View style={styles.flexWrapContainer}>
              {personalInfoValues.phoneNumber ? (
                <Text style={styles.regularText}>
                  {personalInfoValues.phoneNumber}
                </Text>
              ) : null}

              {personalInfoValues.email ? (
                <Text style={styles.regularText}>
                  {personalInfoValues.email}
                </Text>
              ) : null}

              {personalInfoValues.address ? (
                <Text style={styles.regularText}>
                  {personalInfoValues.address}
                </Text>
              ) : null}

              {personalInfoValues.city ? (
                <Text style={styles.regularText}>
                  {personalInfoValues.city}
                </Text>
              ) : null}

              {personalInfoValues.postalcode ? (
                <Text style={styles.regularText}>
                  {personalInfoValues.postalcode}
                </Text>
              ) : null}

              {personalInfoValues.country ? (
                <Text style={styles.regularText}>
                  {personalInfoValues.country}
                </Text>
              ) : null}
            </View>
          ) : null}

          {textEditorValue ? (
            <View style={styles.textEditorValue}>
              <View>{parseHtml(textEditorValue)}</View>
            </View>
          ) : null}

          {skillsData[0] ? (
            <View style={styles.skillsMainContainer}>
              <View style={styles.skillTitle}>
                <Text style={styles.headings}>Skills</Text>
              </View>
              <View style={styles.flexColContainer}>
                <View style={styles.skillsWrapContainer}>
                  {skillsData.map((item, index) => {
                    return <ListItem key={index}>{item}</ListItem>;
                  })}
                </View>
              </View>
            </View>
          ) : null}

          {certificationData[0] ? (
            <View style={styles.skillsMainContainer}>
              <View style={styles.skillTitle}>
                <Text style={styles.headings}>Certifications</Text>
              </View>
              <View style={styles.flexColContainer}>
                <View style={styles.skillsWrapContainer}>
                  {certificationData.map((item, index) => {
                    return (
                      <CertificationListItem key={index}>
                        {item}
                      </CertificationListItem>
                    );
                  })}
                </View>
              </View>
            </View>
          ) : null}
          {websiteData[0] ? (
            <View style={styles.flexColContainer}>
              <Text style={styles.headings}>Social Links</Text>
              <View style={styles.flexWrapContainer}>
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

          {employmentData[0] ? (
            <View style={styles.flexColContainer}>
              <Text style={styles.headings}>Experience</Text>
              {employmentData.map((item, index) => {
                return (
                  <View key={index} style={styles.flexColGap4}>
                    <Text style={styles.semiBoldText}>{item.jobtitle1}</Text>
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

          {educationData[0] ? (
            <View style={styles.flexColContainer}>
              <Text style={styles.headings}>Education</Text>
              {educationData.map((item, index) => {
                return (
                  <View key={index} style={styles.flexColGap4}>
                    <Text style={styles.semiBoldText}>{item.degree}</Text>
                    <Text>
                      {item.school} {item.city1}
                    </Text>
                    <Text style={styles.dateContainer}>
                      <FormattedDate>{item.start}</FormattedDate> {" - "}
                      <FormattedDate>{item.end}</FormattedDate>
                    </Text>
                  </View>
                );
              })}
            </View>
          ) : null}

          {customSectionData[0] ? (
            <View style={styles.flexColContainer}>
              {customSectionData.map((item, index) => {
                return (
                  <View key={index} style={styles.flexColGap4}>
                    <Text style={styles.semiBoldText}>{item.sectionTitle}</Text>
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
        </Page>
      </Document>
    );
  };
  return (
    <div className="h-full bg-white min-h-[846px] overflow-y-scroll hide-scrollbar w-[600px] flex flex-col fira-sans-font gap-[12px] text-[12px] p-[15px] justify-between items-center">
      <div className="w-full flex flex-col gap-[12px]">
        {personalInfoValues.firstName || personalInfoValues.lastName ? (
          <h1 className="text-[20px] text-[#929ca4] font-semibold">
            {personalInfoValues.firstName} {personalInfoValues.lastName}
          </h1>
        ) : null}
        {personalInfoValues.jobTitle ? (
          <h1 className="text-[14px] font-semibold">
            {personalInfoValues.jobTitle}
          </h1>
        ) : null}
        {personalInfoValues.phoneNumber ||
        personalInfoValues.email ||
        personalInfoValues.address ||
        personalInfoValues.city ||
        personalInfoValues.postalcode ||
        personalInfoValues.country ? (
          <ul className="flex items-center flex-wrap  gap-[10px]">
            {personalInfoValues.phoneNumber ? (
              <li>{personalInfoValues.phoneNumber}</li>
            ) : null}
            {personalInfoValues.email ? (
              <li>{personalInfoValues.email}</li>
            ) : null}
            {personalInfoValues.address ? (
              <li>{personalInfoValues.address}</li>
            ) : null}
            {personalInfoValues.city ? (
              <li>{personalInfoValues.city}</li>
            ) : null}
            {personalInfoValues.postalcode ? (
              <li>{personalInfoValues.postalcode}</li>
            ) : null}
            {personalInfoValues.country ? (
              <li>{personalInfoValues.country}</li>
            ) : null}

            {/* {personalInfoValues.nationality ? (
              <li>{personalInfoValues.nationality}</li>
            ) : null} */}
            {/* {personalInfoValues.drivinglicense ? (
              <li>{personalInfoValues.drivinglicense}</li>
            ) : null} */}
            {/* {personalInfoValues.placeofbirth ? (
              <li>{personalInfoValues.placeofbirth}</li>
            ) : null}
            {personalInfoValues.dateofbirth ? (
              <li>{personalInfoValues.dateofbirth}</li>
            ) : null} */}
          </ul>
        ) : null}
        {/* {personalInfoValues.clearance ? (
          <div className="flex flex-col gap-[5px]">
            <h2 className="text-[14px] font-semibold">Security Clearance</h2>
            {personalInfoValues.clearance}
          </div>
        ) : null} */}
        {textEditorValue ? (
          <div
            dangerouslySetInnerHTML={{ __html: textEditorValue }}
            className="ql-editor border-t border-black pt-[5px]"
            style={{ padding: "0px", paddingTop: "5px", height: "auto" }}
          />
        ) : null}

        {skillsData[0] ? (
          <>
            <h2 className="text-[14px] text-[#929ca4] font-semibold">Skills</h2>
            <div className="flex flex-wrap w-full gap-[12px] items-center">
              {skillsData.map((item, index) => {
                return (
                  <li className="w-[30%]" key={index}>
                    {item}
                  </li>
                );
              })}
            </div>
          </>
        ) : null}

        {certificationData[0] ? (
          <>
            <h2 className="text-[14px] text-[#929ca4] font-semibold">
              Certifications
            </h2>
            <div className="flex flex-wrap w-full gap-[12px] items-center">
              {certificationData.map((item, index) => {
                return (
                  <li className="w-[45%]" key={index}>
                    {item}
                  </li>
                );
              })}
            </div>
          </>
        ) : null}

        {websiteData[0] ? (
          <>
            <h2 className="text-[14px] text-[#929ca4] font-semibold">
              Social Links
            </h2>
            <div className="flex flex-wrap w-full gap-[12px] items-center">
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
          </>
        ) : null}

        {employmentData[0] ? (
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-[14px] text-[#929ca4] font-semibold">
              Experience
            </h2>
            {employmentData.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-[4px]">
                  <p className="font-medium">{item.jobtitle1}</p>
                  <p>
                    {item.employer} {item.jobcity}
                  </p>
                  <div className="flex items-center">
                    <FormattedDate>{item.jobstart}</FormattedDate> {" - "}
                    <FormattedDate>{item.jobend}</FormattedDate>
                  </div>

                  {/* <p>{item.jobend}</p> */}
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

        {educationData[0] ? (
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-[14px] text-[#929ca4] font-semibold">
              Education
            </h2>
            {educationData.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-[4px]">
                  <p className="font-medium">{item.degree}</p>
                  <div className="flex justify-between gap-[15px] items-center">
                    <p>
                      {item.school} {item.city1}
                    </p>
                    <div className="flex items-center">
                      <FormattedDate>{item.start}</FormattedDate> {" - "}
                      <FormattedDate>{item.end}</FormattedDate>
                    </div>
                  </div>
                  {/* <p>{item.edudescription}</p> */}
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
                  <h2 className="text-[14px] text-[#929ca4] font-semibold">
                    {item.sectionTitle}
                  </h2>
                  <p>
                    {item.activity} {item.customSectionCity}
                  </p>
                  <div className="flex items-center">
                    <FormattedDate>{item.customStartDate}</FormattedDate>{" "}
                    {" - "}
                    <FormattedDate>{item.customEndDate}</FormattedDate>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: item.customDescription }}
                    className="ql-editor"
                    style={{ padding: "0px", height: "auto" }}
                  />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <PDFDownloadLink
        document={<DownloadPDF />}
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
  );
};

export default Resume;
