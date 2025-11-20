import {useGetDoctorsQuery} from "./doctorsApiSlice"
import Doctor from "./Doctors"
import Styles from "../../css/doctorsList.module.css"


const DoctorsList = () => {
    const {
        data: doctors,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetDoctorsQuery();

    let content;

    if (isLoading) content = <p>Loading...</p>;

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>;
    }

    if (isSuccess) {
        const { ids } = doctors;
        const doctorItems = ids?.length
          ? ids.map(doctorId => <Doctor key={doctorId } doctorId ={doctorId } />)
          : null;
    content = (
        <>
            <div id="wrapper">
                <div id="main">
                    <section className={Styles.section50}>
                        <div className="container">
                            <h3 className={`${Styles.mB50} ${Styles.headingLine}`}>Therapists List</h3>
                            <div className={Styles.notificationUi_ddContent}>
                                {doctorItems}
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

export default DoctorsList