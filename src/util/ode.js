(function(d3, des) {
    'use strict';

    des.util.ode = function() {

    	var linear = true;
    	var coefficients = [0];
    	var inhomogeneity = d3.functor(0);

        function ode() {
        	//what does this return?
        }

        ode.linear = function(set) {
            if (!arguments.length) {
                return linear;
            }
            linear = set;
            return ode;
        };

        ode.coefficients = function(set) {
            if (!arguments.length) {
                return h;
            }
            if (Array.isArray(set)) {
            	coefficients = set;
        	} else {
        		coefficients = [set];
        	}
            return ode;
        };

        ode.inhomogeneity = function(set) {
            if (!arguments.length) {
                return ode;
            }
            inhomogeneity = d3.functor(set);
            return ode;
        };

        return ode;
    };
})(d3, des);