import React, { useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {format, sub} from "date-fns";

import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';
import { PostImage } from '../../types';
import fetchApi from'../../utils/fetch';


const Home = () => {

    const [todaysImage, setTodaysImage] = useState<PostImage>({}); //un objeto
    const[lastFiveDaysImages, setlastFiveDaysImages] = useState<PostImage[]>([]); //un arreglo

    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse)

            } catch (error) {
                console.error(error);
                setTodaysImage({});

            }
        };

        const loadLast5DaysImage = async () => { //se instalo la libreria date-fns para formatear fechas 
            try {   
                const date = new Date();
                const todayDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd')//le extraigo anos/meses/dias a una fecha
                
                const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`) //ahora la llamada a la api tiene parametros
                setlastFiveDaysImages(lastFiveDaysImagesResponse);
            } catch (error) {
                console.error(error);
            }

            
        }

        loadTodaysImage().catch(null);
        loadLast5DaysImage().catch(null);

    }, []);

    

    return(
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage}/>
            <LastFiveDaysImages postImages ={lastFiveDaysImages}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)'
    }
});

export default Home;