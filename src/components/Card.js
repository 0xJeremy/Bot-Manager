// import React from "react";
// // material-ui
// import { makeStyles } from "@material-ui/core/styles";
// // @material-ui/icons
// import Language from "@material-ui/icons/Language";
// // core components
// import Grid from "@material-ui/core/Grid";
// import GridItem from "./packs/GridItem.js";
// import Card from "./packs/Card.js";
// import CardBody from "./packs/CardBody.js";
// import CardHeader from "./packs/CardHeader.js";
// import CardIcon from "./packs/CardIcon.js";

// var styles = {
//   cardTitle: {
//     marginTop: "0",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none"
//   }
// };

// const useStyles = makeStyles(styles);

// export default function CardHeaderTypes() {
//   const classes = useStyles();
//   return (
//     <div>
//       <Grid container>
//         <GridItem xs={12} sm={12} md={6}>
//           <Card>
//             <CardHeader>
//               <h4 className={classes.cardTitle}>Regular header</h4>
//               <p>Category subtitle</p>
//             </CardHeader>
//             <CardBody>
//               The place is close to Barceloneta Beach and bus stop just 2 min by
//               walk and near to "Naviglio" where you can enjoy the main night
//               life in Barcelona...
//             </CardBody>
//           </Card>
//         </GridItem>
//         <GridItem xs={12} sm={12} md={6}>
//           <Card>
//             <CardHeader color="danger">
//               <h4 className={classes.cardTitle}>Full header coloured</h4>
//               <p>Category subtitle</p>
//             </CardHeader>
//             <CardBody>
//               The place is close to Barceloneta Beach and bus stop just 2 min by
//               walk and near to "Naviglio" where you can enjoy the main night
//               life in Barcelona...
//             </CardBody>
//           </Card>
//         </GridItem>
//       </Grid>
//       <Grid>
//         <GridItem xs={12} sm={12} md={6}>
//           <Card>
//             <CardHeader color="rose" icon>
//               <CardIcon color="rose">
//                 <Language />
//               </CardIcon>
//             </CardHeader>
//             <CardBody>
//               <h4 className={classes.cardTitle}>Here is the Icon</h4>
//               The place is close to Barceloneta Beach and bus stop just 2 min by
//               walk and near to "Naviglio" where you can enjoy the main night
//               life in Barcelona...
//             </CardBody>
//           </Card>
//         </GridItem>
//       </Grid>
//     </div>
//   );
// }

import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "./packs/GridItem.js";

import Card from "./packs/Card.js";
import CardHeader from "./packs/CardHeader.js";
import CardBody from "./packs/CardBody.js";
import CardFooter from "./packs/CardFooter.js";

import { emailsSubscriptionChart, completedTasksChart } from "./packs/charts";

import styles from "./packs/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function CardChart() {
  const classes = useStyles();
  return (
    <Grid container>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="warning">
            <ChartistGraph
              className="ct-chart"
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Email Subscriptions</h4>
            <p className={classes.cardCategory}>Last Campaign Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="danger">
            <ChartistGraph
              className="ct-chart"
              data={completedTasksChart.data}
              type="Line"
              options={completedTasksChart.options}
              listener={completedTasksChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Completed Tasks</h4>
            <p className={classes.cardCategory}>Last Campaign Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
}