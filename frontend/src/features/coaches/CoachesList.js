import {useGetCoachesQuery} from "./coachesApiSlice"
import Doctor from "./Coaches"
import Styles from "../../css/doctorsList.module.css"


const CoachesList = () => {
    const {
        data: coaches,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCoachesQuery();

    let content;

    if (isLoading) content = <p>Loading...</p>;

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>;
    }

    if (isSuccess) {
        const { ids } = coaches;
        const coachItems = ids?.length
          ? ids.map(coachId => <Doctor key={coachId } doctorId ={coachId } />)
          : null;
    content = (
        <>
            <div id="wrapper">
                <div id="main">
                    <section className={Styles.section50}>
                        <div className="container">
                            <h3 className={`${Styles.mB50} ${Styles.headingLine}`}>Therapists List</h3>
                            <div className={Styles.notificationUi_ddContent}>
                                {coachItems}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
    

  return content;
}

export default CoachesList