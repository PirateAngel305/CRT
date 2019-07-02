export const intern = apply => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("interns")
      .add({
        ...apply,
        studentName: profile.firstName,
        studentId: authorId,
        status: "Applied",
        appliedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "APPLY_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "APPLY_ERROR" }, err);
      });
  };
};
