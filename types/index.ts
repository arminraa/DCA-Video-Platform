interface Post {
  id: number;
  name: string;
  main_name: string;
  description: string;
  title: string;
  keywords: string;
  url: string;
  slug: string;
  duration: string;
  poster: string;
  video: {
    original: null | string;
    webm: null | string;
  };
  body: string;
  like: string;
  dislike: string;
  view: string;
  position: string;
  data_structure: null | string;
  status: string;
  type: string;
  index_status: string;
  category_id: string;
  parent_id: null | string;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  category: {
    id: number;
    name: string;
    title: string;
    description: string;
    keywords: string;
    image: {
      indexArray: {
        original: string;
        large: string;
        "large_1.5x": string;
        large_2x: string;
        medium: string;
        "medium_1.5x": string;
        medium_2x: string;
        samll: string;
        "samll_1.5x": string;
        samll_2x: string;
      };
      directory: string;
      currentImage: string;
      indexWeb: {
        original: string;
        large: string;
        "large_1.5x": string;
        large_2x: string;
        medium: string;
        "medium_1.5x": string;
        medium_2x: string;
        samll: string;
        "samll_1.5x": string;
        samll_2x: string;
      };
    };
    image_name: string;
    image_alt: string;
    url: string;
    slug: string;
    body: null | string;
    position: string;
    status: string;
    type: string;
    data_structure: null | string;
    parent_id: string;
    created_at: string;
    updated_at: null | string;
    deleted_at: null | string;
  };
}

interface Category {
  id: number;
  name: string;
  title: "دوربین مدار بسته- ویدیو های آموزشی و معرفی دوربین مدار بسته";
  description: string;
  keywords: string;
  image: {
    indexArray: {
      original: string;
      large: string;
      "large_1.5x": string;
      large_2x: string;
      medium: string;
      "medium_1.5x": string;
      medium_2x: string;
      samll: string;
      "samll_1.5x": string;
      samll_2x: string;
    };
    directory: string;
    currentImage: string;
    indexWeb: {
      original: string;
      large: string;
      "large_1.5x": string;
      large_2x: string;
      medium: string;
      "medium_1.5x": string;
      medium_2x: string;
      samll: string;
      "samll_1.5x": string;
      samll_2x: string;
    };
  };
  image_name: string;
  image_alt: string;
  url: string;
  slug: string;
  body: null | string;
  position: string;
  status: string;
  type: string;
  data_structure: null | string;
  parent_id: string;
  created_at: string;
  updated_at: null | string;
  deleted_at: null | string;
}

interface Box {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  position: string;
  type: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface DataObj {
  viewed: Post[];
  tutorialVideo: Post[];
  newVideo: Post[];
  mainCategories: Category[];
  categories: Category[];
  boxs: Box[];
  type: string | null;
}

interface Video {
  id: number;
  name: string;
  main_name: string;
  description: string;
  title: string;
  keywords: null | string;
  url: string;
  slug: string;
  duration: string;
  poster: string;
  video: {
    original: string;
    webm: string;
  };
  body: string;
  like: string;
  dislike: string;
  view: string;
  position: string;
  data_structure: null | string;
  status: string;
  type: string;
  index_status: string;
  category_id: string;
  parent_id: null | string;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}

export type Data = DataObj | null;

export interface CategoryObj {
  category: Category;
  mainCategories: Category[];
  categories: Category[];
  videos: Video[];
  type: "category";
}


export type Categories = CategoryObj | null;
