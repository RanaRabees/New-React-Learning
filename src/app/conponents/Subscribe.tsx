"use client"
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';


function Label({
    componentName,
    valueType,
    isProOnly,
}: {
    componentName: string;
    valueType: string;
    isProOnly?: boolean;
}) {
    const content = (
        <span>
            <strong>{componentName}</strong> for {valueType} editing
        </span>
    );

    if (isProOnly) {
        return (
            <Stack direction="row" spacing={0.5} component="span">
                <Tooltip title="Included on Pro package">
                    <a href="/x/introduction/licensing/#pro-plan">
                        <span className="plan-pro" />
                    </a>
                </Tooltip>
                {content}
            </Stack>
        );
    }

    return content;
}

export default function Subscribe() {
    return (
        <>
            <ValidationBehaviorView />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DatePicker',
                        'TimePicker',
                        'DateTimePicker',
                        'DateRangePicker',
                    ]}
                >
                    <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
                        <DatePicker />
                    </DemoItem>
                    <DemoItem label={<Label componentName="TimePicker" valueType="time" />}>
                        <TimePicker />
                    </DemoItem>
                    <DemoItem
                        label={<Label componentName="DateTimePicker" valueType="date time" />}
                    >
                        <DateTimePicker />
                    </DemoItem>
                    <DemoItem
                        label={
                            <Label
                                componentName="DateRangePicker"
                                valueType="date range"
                                isProOnly
                            />
                        }
                        component="DateRangePicker"
                    >
                        <DateRangePicker
                            localeText={{
                                start: '',
                                end: '',
                            }}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </>
    );
}




const today = dayjs();
const twoPM = dayjs().set('hour', 14).startOf('hour');
const threePM = dayjs().set('hour', 15).startOf('hour');

function ValidationBehaviorView() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid
                container
                columns={{ xs: 1, lg: 2 }}
                spacing={4}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <DateCalendar defaultValue={today} disableFuture />
                </Grid>
                <Grid item>
                    <TimeClock defaultValue={twoPM} maxTime={threePM} />
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}
