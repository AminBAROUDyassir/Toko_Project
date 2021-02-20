import React from 'react'
import { Card, Paper } from "@material-ui/core";

export default function PageHeader({ title, subtitle, status, icon}) {
    return (
        <Paper elevation={0}  square>
            <div>
                <Card>
                {icon}
                </Card>
            </div>
        </Paper>
    )
}




