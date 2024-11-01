
interface LayoutProps {
  headerTitle?: string;
  headerSubTitle?: string;
  headerIcon?: string;
  children: React.ReactNode;
};
interface CategoryLayoutType extends LayoutProps {}

 const CategoryLayout: React.FC<CategoryLayoutType> = ({
  headerTitle,
  headerSubTitle,
  headerIcon,
  children,
}) => {
  return (
    <section className="my-4 px-4">
      <div className="grid grid-cols-1 gap 4">
        <h1 className=" mb-2 text-4xl  font-semibold flex items-center">
          {headerTitle}
          <span className="text-2xl mx-2">{headerIcon}</span>
        </h1>
        <h2 className="mt-2 w-2/4 max-sm:w-5/6 ">{headerSubTitle}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};




export default CategoryLayout