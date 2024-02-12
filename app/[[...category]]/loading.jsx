import CategoriesLoading from "@/components/categories/loading";
import FeatureMovieLoading from "@/components/featured-movie/loading";
import React from "react";

function Loading() {
  return (
    <div>
      <CategoriesLoading />
      <FeatureMovieLoading />
    </div>
  );
}

export default Loading;
