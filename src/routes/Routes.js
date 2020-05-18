import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../pages/HomePage";
import { getCategoriesRequest } from "../store/actions/categories";
import PreloaderAdaptive from "../components/Preloader/Adaptive";


const Routes = ({ getCategoriesRequest, preloader }) => {
  useEffect(() => {
    getCategoriesRequest();
  }, [getCategoriesRequest]);

  return preloader ? (
    <PreloaderAdaptive />
  ) : (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    preloader: state.categoriesReducer.isLoading,
  };
}

export default connect(mapStateToProps, { getCategoriesRequest })(Routes);
